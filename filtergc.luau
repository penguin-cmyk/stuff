type FunctionFilterOptions = {
    Name: string?, 
    Hash: string?,
    IgnoreExecutor: boolean?,
    Constants: { any }?,
    Upvalues: { any }?,
}

type TableFilterOptions = {
    Metatable: { any }?,
    Keys: { any }?,
    Values: { any }?,
    KeyValuePairs: { [any]: any }?,
}

type Function = ((...any) -> (...any))
type Table = ({ [any]: any })
type ReturnType = Function | Table

local info, find, insert = debug.getinfo, table.find, table.insert
local constants, upvalues = debug.getconstants, debug.getupvalues


local function filter_upvalues(func: Function, expected_upvalues: Table, ignore_executor: boolean): boolean
    
    local func_upvalues = upvalues(func)
    if #func_upvalues == 0 then return false end 

    local found = false 
    for _, value in pairs(expected_upvalues) do 
        if not find(func_upvalues, value) then continue end 

        found = true 
        break  
    end 
    return found 
end 

local function filter_constants(func: Function, expected_constants: Table, ignore_executor: boolean): boolean
    if iscclosure(func) then return false end 
    local func_constants = constants(func)
    if #func_constants == 0 then 
        return false 
    end

    local found = false 
    for _, value in pairs(expected_constants) do 
        if not find(func_constants, value) then continue end 
        
        found = true 
        break
    end 
    return found 
end 

local function filtergc(filter_type: "function" | "table", filter_options: FunctionFilterOptions | TableFilterOptions, return_one: boolean): ReturnType? | { ReturnType }
    if string.lower(filter_type) == "function" then 
        local output = {}

        local specific_name = filter_options.Name
        local specific_hash = filter_options.Hash
        local specific_constants = filter_options.Constants 
        local specific_upvalues = filter_options.Upvalues
        local ignore_executor = filter_options.IgnoreExecutor

        if ignore_executor == nil then 
            ignore_executor = true 
        end 

        local nothing_provided = not specific_name and not specific_constants and not specific_upvalues and not specific_hash 

        for _, value in pairs(getgc()) do 
            if typeof(value) ~= "function" or iscclosure(value) then continue end  
            
            if ignore_executor and isexecutorclosure(value) then continue end 
            
            local function_info = info(value)
            local name = function_info.name 

            if nothing_provided then 
                insert(output, value)
            end             

            if specific_name and name ~= specific_name then
                continue
            end

            if specific_hash and specific_hash ~= getfunctionhash(value) then
                continue 
            end 

            if specific_upvalues and function_info.nups ~= 0 and not filter_upvalues(value, specific_upvalues, ignore_executor) then 
                continue 
            elseif specific_upvalues and function_info.nups == 0 then 
                continue 
            end 

            if specific_constants and not filter_constants(value, specific_constants, ignore_executor) then 
                continue
            end 

            insert(output, value)
            if return_one then
                break
            end
 
        end 

        return not return_one and output or output[1]

    elseif string.lower(filter_type) == "table" then 
        local output = {}
        
        local specific_keys = filter_options.Keys 
        local specific_values = filter_options.Values
        local specific_pairs = filter_options.KeyValuePairs
        local specific_metatable = filter_options.Metatable
        local max_depth = 1 -- increase it if you want, I dont recommend it tho (will either lag or crash completly)

        local nothing_provided = not specific_keys and not specific_values and not specific_pairs and not specific_metatable

        local function check_table(tbl: Table, depth: number)
            if depth > max_depth then
                return false 
            end

            if nothing_provided then 
                insert(output, tbl)
            end 

            local matches = false
            if specific_keys then
                for key, _ in pairs(tbl) do 
                    if find(specific_keys, key) then 
                        matches = true 
                        break 
                    end 
                end 
            end

            if specific_values then
                for _, value in pairs(tbl) do 
                    if find(specific_values, value) then 
                        matches = true 
                        break 
                    end 
                end
            end

            if specific_metatable and getrawmetatable(tbl) == specific_metatable then 
                matches = true 
            end 

            if specific_pairs then
                for key, value in pairs(tbl) do     
                    if specific_pairs[key] == value then
                        matches = true
                        break
                    end
                end
            end

            if not matches then
                for _, v in pairs(tbl) do
                    if typeof(v) == "table" then
                        matches = check_table(v, depth + 1)
                        if matches then
                            break
                        end
                    end
                end
            end

            return not nothing_provided and matches or nothing_provided
        end

        for _, tbl in pairs(getgc(true)) do 
            if typeof(tbl) ~= "table" then 
                continue 
            end 
            local is_not_self = tbl ~= specific_keys and tbl ~= specific_values and tbl ~= specific_pairs
            if not is_not_self then 
                continue 
            end 
            if check_table(tbl, 1) then
                insert(output, tbl)
                if return_one then
                    break
                end
            end
        end
        return not return_one and output or output[1]
    end 
end 

getgenv().filtergc = newcclosure(filtergc)


