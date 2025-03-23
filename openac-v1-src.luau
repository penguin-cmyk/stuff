--!optimize 2
--!nolint DeprecatedApi
--!nolint DeprecatedGlobal
--!nolint BuiltinGlobalWrite
--!nocheck
--!nolint

-- // Settings
local CharacterChecksEnabled = true

--// Main
local ACBootup = os.clock()

debug.setmemorycategory("OpenAC Client")
local DockWidgetPluginGuiInfo_t, warn_t, CFrame_t, gcinfo_t, os_t, tick_t, task_t, UDim_t, pairs_t, NumberSequence_t, assert_t, rawlen_t, tonumber_t, Color3_t, Enum_t, Delay_t, OverlapParams_t, Stats_t, _G_t, RotationCurveKey_t, coroutine_t, NumberRange_t, FloatCurveKey_t, PhysicalProperties_t, Region3int16_t, ypcall_t, Font_t, Ray_t, NumberSequenceKeypoint_t, Version_t, Vector2_t, version_t, Game_t, delay_t, spawn_t, stats_t, string_t, wait_t, UserSettings_t, settings_t, _VERSION_t, loadstring_t, printidentity_t, CatalogSearchParams_t, UDim2_t, unpack_t, TweenInfo_t, Wait_t, require_t, Vector3_t, Instance_t, Vector3int16_t, setmetatable_t, next_t, elapsedTime_t, time_t, shared_t, ipairs_t, Workspace_t, Faces_t, rawequal_t, Vector2int16_t, collectgarbage_t, game_t, newproxy_t, Spawn_t, DateTime_t, Region3_t, utf8_t, xpcall_t, Random_t, rawset_t, PathWaypoint_t, tostring_t, RaycastParams_t, workspace_t, typeof_t, math_t, bit32_t, pcall_t, ColorSequenceKeypoint_t, getfenv_t, type_t, ColorSequence_t, ElapsedTime_t, select_t, getmetatable_t, rawget_t, table_t, Rect_t, BrickColor_t, setfenv_t, debug_t, Axes_t, error_t, print_t = DockWidgetPluginGuiInfo, warn, CFrame, gcinfo, os, tick, task, UDim, pairs, NumberSequence, assert, rawlen, tonumber, Color3, Enum, Delay, OverlapParams, Stats, _G, RotationCurveKey, coroutine, NumberRange, FloatCurveKey, PhysicalProperties, Region3int16, ypcall, Font, Ray, NumberSequenceKeypoint, Version, Vector2, version, Game, delay, spawn, stats, string, wait, UserSettings, settings, _VERSION, loadstring, printidentity, CatalogSearchParams, UDim2, unpack, TweenInfo, Wait, require, Vector3, Instance, Vector3int16, setmetatable, next, elapsedTime, time, shared, ipairs, Workspace, Faces, rawequal, Vector2int16, collectgarbage, game, newproxy, Spawn, DateTime, Region3, utf8, xpcall, Random, rawset, PathWaypoint, tostring, RaycastParams, workspace, typeof, math, bit32, pcall, ColorSequenceKeypoint, getfenv, type, ColorSequence, ElapsedTime, select, getmetatable, rawget, table, Rect, BrickColor, setfenv, debug, Axes, error, print
DockWidgetPluginGuiInfo, warn, CFrame, gcinfo, os, tick, task, UDim, pairs, NumberSequence, assert, rawlen, tonumber, Color3, Enum, Delay, OverlapParams, Stats, _G, RotationCurveKey, coroutine, NumberRange, FloatCurveKey, PhysicalProperties, Region3int16, ypcall, Font, Ray, NumberSequenceKeypoint, Version, Vector2, version, Game, delay, spawn, stats, string, wait, UserSettings, settings, _VERSION, loadstring, printidentity, CatalogSearchParams, UDim2, unpack, TweenInfo, Wait, require, Vector3, Instance, Vector3int16, setmetatable, next, elapsedTime, time, shared, ipairs, Workspace, Faces, rawequal, Vector2int16, collectgarbage, game, newproxy, Spawn, DateTime, Region3, utf8, xpcall, Random, rawset, PathWaypoint, tostring, RaycastParams, workspace, typeof, math, bit32, pcall, ColorSequenceKeypoint, getfenv, type, ColorSequence, ElapsedTime, select, getmetatable, rawget, table, Rect, BrickColor, setfenv, debug, Axes, error, print = nil
DockWidgetPluginGuiInfo, warn, CFrame, gcinfo, os, tick, task, UDim, pairs, NumberSequence, assert, rawlen, tonumber, Color3, Enum, Delay, OverlapParams, Stats, _G, RotationCurveKey, coroutine, NumberRange, FloatCurveKey, PhysicalProperties, Region3int16, ypcall, Font, Ray, NumberSequenceKeypoint, Version, Vector2, version, Game, delay, spawn, stats, string, wait, UserSettings, settings, _VERSION, loadstring, printidentity, CatalogSearchParams, UDim2, unpack, TweenInfo, Wait, require, Vector3, Instance, Vector3int16, setmetatable, next, elapsedTime, time, shared, ipairs, Workspace, Faces, rawequal, Vector2int16, collectgarbage, game, newproxy, Spawn, DateTime, Region3, utf8, xpcall, Random, rawset, PathWaypoint, tostring, RaycastParams, workspace, typeof, math, bit32, pcall, ColorSequenceKeypoint, getfenv, type, ColorSequence, ElapsedTime, select, getmetatable, rawget, table, Rect, BrickColor, setfenv, debug, Axes, error, print = DockWidgetPluginGuiInfo_t, warn_t, CFrame_t, gcinfo_t, os_t, tick_t, task_t, UDim_t, pairs_t, NumberSequence_t, assert_t, rawlen_t, tonumber_t, Color3_t, Enum_t, Delay_t, OverlapParams_t, Stats_t, _G_t, RotationCurveKey_t, coroutine_t, NumberRange_t, FloatCurveKey_t, PhysicalProperties_t, Region3int16_t, ypcall_t, Font_t, Ray_t, NumberSequenceKeypoint_t, Version_t, Vector2_t, version_t, Game_t, delay_t, spawn_t, stats_t, string_t, wait_t, UserSettings_t, settings_t, _VERSION_t, loadstring_t, printidentity_t, CatalogSearchParams_t, UDim2_t, unpack_t, TweenInfo_t, Wait_t, require_t, Vector3_t, Instance_t, Vector3int16_t, setmetatable_t, next_t, elapsedTime_t, time_t, shared_t, ipairs_t, Workspace_t, Faces_t, rawequal_t, Vector2int16_t, collectgarbage_t, game_t, newproxy_t, Spawn_t, DateTime_t, Region3_t, utf8_t, xpcall_t, Random_t, rawset_t, PathWaypoint_t, tostring_t, RaycastParams_t, workspace_t, typeof_t, math_t, bit32_t, pcall_t, ColorSequenceKeypoint_t, getfenv_t, type_t, ColorSequence_t, ElapsedTime_t, select_t, getmetatable_t, rawget_t, table_t, Rect_t, BrickColor_t, setfenv_t, debug_t, Axes_t, error_t, print_t

-- // XChaCha20 Ciphering
local HexToString = function(HexInput)
	return (string.gsub(HexInput, "..", function(Char)
		return string.char(tonumber(Char, 16))
	end))
end

local StringToHex = function(String)
	return (string.gsub(String, '.', function(c)
		return string.format('%02X', string.byte(c))
	end))
end

local Encrypt, Decrypt do
	-- Chacha quarter round (rotl inlined)
	local QRound = function(St, X, Y, Z, W)
		-- St is a chacha state: an array of 16 u32 words
		-- X, Y, Z, W are indices in St
		local A, B, C, D = St[X], St[Y], St[Z], St[W]
		A = bit32.band(A + B, 0xffffffff)
		D = bit32.bor(bit32.lshift(bit32.bxor(D, A), 16), bit32.rshift(bit32.bxor(D, A), 16))
		C = bit32.band(C + D, 0xffffffff)
		B = bit32.bor(bit32.lshift(bit32.bxor(B, C), 12), bit32.rshift(bit32.bxor(B, C), 20))
		A = bit32.band(A + B, 0xffffffff)
		D = bit32.bor(bit32.lshift(bit32.bxor(D, A), 8), bit32.rshift(bit32.bxor(D, A), 24))
		C = bit32.band(C + D, 0xffffffff)
		B = bit32.bor(bit32.lshift(bit32.bxor(B, C), 7), bit32.rshift(bit32.bxor(B, C), 25))
		St[X], St[Y], St[Z], St[W] = A, B, C, D
		return St
	end

	-- Chacha20 state and working state are allocated once and reused
	-- by each invocation of Chacha20Block()
	local Chacha20State = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}
	local Chacha20WorkingState = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}

	local Chacha20Block = function(Key, Counter, Nonce)
		-- Key: u32[8]
		-- Counter: u32
		-- Nonce: u32[3]
		local St = Chacha20State      -- state
		local Wst = Chacha20WorkingState -- working state
		-- Initialize state
		St[1], St[2], St[3], St[4] = 0x61707865, 0x3320646e, 0x79622d32, 0x6b206574
		for I = 1, 8 do St[I+4] = Key[I] end
		St[13] = Counter
		for I = 1, 3 do St[I+13] = Nonce[I] end
		-- Copy state to working_state
		for I = 1, 16 do Wst[I] = St[I] end
		-- Run 20 rounds, i.e., 10 iterations of 8 quarter rounds
		for _ = 1, 10 do           --RFC reference:
			--task.wait()
			QRound(Wst, 1, 5, 9, 13)  --1.  QUARTERROUND ( 0, 4, 8,12)
			QRound(Wst, 2, 6, 10, 14) --2.  QUARTERROUND ( 1, 5, 9,13)
			QRound(Wst, 3, 7, 11, 15) --3.  QUARTERROUND ( 2, 6,10,14)
			QRound(Wst, 4, 8, 12, 16) --4.  QUARTERROUND ( 3, 7,11,15)
			QRound(Wst, 1, 6, 11, 16) --5.  QUARTERROUND ( 0, 5,10,15)
			QRound(Wst, 2, 7, 12, 13) --6.  QUARTERROUND ( 1, 6,11,12)
			QRound(Wst, 3, 8, 9, 14)  --7.  QUARTERROUND ( 2, 7, 8,13)
			QRound(Wst, 4, 5, 10, 15) --8.  QUARTERROUND ( 3, 4, 9,14)
		end
		-- Add working_state to state
		for I = 1, 16 do St[I] = bit32.band(St[I] + Wst[I], 0xffffffff) end
		-- Return St, an array of 16 u32 words used as a keystream
		return St
	end --Chacha20Block()

	-- Pat16: used to unpack a 64-byte string as 16 uint32
	local Pat16 = "<I4I4I4I4I4I4I4I4I4I4I4I4I4I4I4I4"

	local Chacha20EncryptBlock = function(Key, Counter, Nonce, Pt, PtIdx)
		-- Encrypt a 64-byte block of plain text.
		-- Key: 32 bytes as an array of 8 uint32
		-- Counter: a uint32 (must be incremented for each block)
		-- Nonce: 12 bytes as an array of 3 uint32
		-- Pt: plain text string,
		-- PtIdx: index of beginning of block in plain text (origin=1)
		-- If less than 64 bytes are left at position PtIdx, it is padded
		--    with null bytes before encryption and result is stripped
		--    accordingly.
		-- Return encrypted block as a string (length <= 16)
		local Rbn = #Pt - PtIdx + 1 -- number of remaining bytes in Pt
		if Rbn < 64 then
			local Tmp = string.sub(Pt, PtIdx)
			Pt = Tmp .. string.rep('\0', 64 - Rbn) --pad last block
			PtIdx = 1
		end

		local Ba = table.pack(string.unpack(Pat16, Pt, PtIdx))
		local Keystream = Chacha20Block(Key, Counter, Nonce)
		for I = 1, 16 do
			--task.wait()
			Ba[I] = bit32.bxor(Ba[I], Keystream[I])
		end

		local Es = string.pack(Pat16, table.unpack(Ba))
		if Rbn < 64 then
			Es = string.sub(Es, 1, Rbn)
		end

		return Es
	end --Chacha20EncryptBlock

	local Chacha20Encrypt = function(Key, Counter, Nonce, Pt)
		-- Encrypt plain text 'Pt', return encrypted text
		-- Key: 32 bytes as a string
		-- Counter: a uint32 (must be incremented for each block)
		-- Nonce: 8 bytes as a string
		-- Pt: plain text string,

		-- Ensure Counter can fit a uint32 --although it's unlikely
		-- that we hit this wall with pure Lua encryption :-)

		local KeyA = table.pack(string.unpack("<I4I4I4I4I4I4I4I4", Key))
		local NonceA = table.pack(string.unpack("<I4I4I4", Nonce))
		local T = {} -- used to collect all encrypted blocks
		local PtIdx = 1

		while PtIdx <= #Pt do
			--task.wait()

			table.insert(T, Chacha20EncryptBlock(KeyA, Counter, NonceA, Pt, PtIdx))
			PtIdx += 64
			Counter += 1
		end

		local Et = table.concat(T)
		return Et
	end --Chacha20Encrypt()

	local HChacha20 = function(Key, Nonce16)
		-- Key: string(32)
		-- Nonce16: string(16)
		local KeyA = table.pack(string.unpack("<I4I4I4I4I4I4I4I4", Key))
		local NonceA = table.pack(string.unpack("<I4I4I4I4", Nonce16))
		local St = {}  -- chacha working state
		-- Initialize state
		St[1], St[2], St[3], St[4] = 0x61707865, 0x3320646e, 0x79622d32, 0x6b206574
		for I =  1, 8 do St[I+4] = KeyA[I] end
		for I = 1, 4 do St[I+12] = NonceA[I] end
		-- Run 20 rounds, i.e., 10 iterations of 8 quarter rounds
		for _ = 1, 10 do              --RFC reference:
			QRound(St, 1, 5, 9, 13)  --1.  QUARTERROUND ( 0, 4, 8,12)
			QRound(St, 2, 6, 10, 14) --2.  QUARTERROUND ( 1, 5, 9,13)
			QRound(St, 3, 7, 11, 15) --3.  QUARTERROUND ( 2, 6,10,14)
			QRound(St, 4, 8, 12, 16) --4.  QUARTERROUND ( 3, 7,11,15)
			QRound(St, 1, 6, 11, 16) --5.  QUARTERROUND ( 0, 5,10,15)
			QRound(St, 2, 7, 12, 13) --6.  QUARTERROUND ( 1, 6,11,12)
			QRound(St, 3, 8, 9, 14)  --7.  QUARTERROUND ( 2, 7, 8,13)
			QRound(St, 4, 5, 10, 15) --8.  QUARTERROUND ( 3, 4, 9,14)
		end

		local Subkey = string.pack("<I4I4I4I4I4I4I4I4", 
			St[1], St[2], St[3], St[4],
			St[13], St[14], St[15], St[16] )
		return Subkey
	end

	local XChacha20Encrypt = function(Key, Counter, Nonce, Pt)
		local Subkey = HChacha20(Key, Nonce:sub(1, 16))
		local Nonce12 = '\0\0\0\0'..Nonce:sub(17)
		return Chacha20Encrypt(Subkey, Counter, Nonce12, Pt)
	end

	Encrypt = function(PlainText, Key, Nonce, Counter)
		return StringToHex(XChacha20Encrypt(Key, Counter, Nonce, PlainText))
	end

	Decrypt = function(EncryptedText, Key, Nonce, Counter)
		return XChacha20Encrypt(Key, Counter, Nonce, HexToString(EncryptedText))
	end
end

-- // Utilities
local CurrentDetection = nil --> {(hex)DetectionName: (hex)string, (hex)Args: {...}}
local DetectionRegistry = {} --> [(hex)Name]: {(hex)LastHandshake: (hex)float_clock, Thread: lua_thread}

local BaseSource, BaseClosure, RootLevel

RootLevel = 0
while true do
	RootLevel += 1
	if not debug.info(RootLevel, "s") then
		RootLevel -= 1
		break
	end
end

BaseSource, BaseClosure = debug.info(RootLevel, "sf")
local BaseEnv = getfenv(BaseClosure)

-- // Functions
local FastWait = function(Duration)
	return task.wait(Duration or (1 / 240))
end

local RandomUTF8String = function(Length)
	local Length = Length or math.random(16, 32)
	local Buffer = buffer.create(Length)

	for Offset = 0, Length - 4 do
		buffer.writeu32(Buffer, Offset, math.random(1, 1114111)) --// Random UTF8 Character
	end

	return buffer.tostring(Buffer)
end

local ShuffleTable = function(Table)
	for Index = #Table, 2, -1 do
		local RandomizedIndex = math.random(Index)
		Table[Index], Table[RandomizedIndex] = Table[RandomizedIndex], Table[Index]
	end

	return Table
end

local OAC_CRASHHOOK; OAC_CRASHHOOK = function(StackSize, Function, ...)
	if StackSize % 500 == 0 then
		FastWait()
	end

	Function(...)
	OAC_CRASHHOOK(StackSize + 1, Function, ...)
end

--// Safe Library
local OAC_GETTYPE = function(Object)
	if Object == nil then --> Safe as __eq cannot be triggered in this operation in Luau
		return "nil"
	end

	local IsTable, Error = pcall(table.clone, Object)
	local IsNumber = pcall(function() return Object + 0 end)

	if IsTable or (not Error) then
		return "table"
	end

	local Type = string.sub(string.match(Error, "got %w+"), 5)
	if IsNumber and Type == "number" then
		return "number"
	end

	return Type
end

local DebugOptionsArray = {"s", "l", "n", "f"}
local OAC_DBGINFO = function(levelOrFunctionOrThread, optionsOrLevel, options)
	local Options do
		if OAC_GETTYPE(optionsOrLevel) == "string" then
			Options = optionsOrLevel
		else
			Options = options
		end
	end

	local ShuffledOptions = ShuffleTable(table.clone(DebugOptionsArray))
	table.insert(ShuffledOptions, "a")

	local PackedResults do
		local ConcatenatedShuffledOptions = table.concat(ShuffledOptions)

		if OAC_GETTYPE(levelOrFunctionOrThread) == "thread" then
			PackedResults = {debug.info(levelOrFunctionOrThread, optionsOrLevel, ConcatenatedShuffledOptions)}
		else
			if OAC_GETTYPE(levelOrFunctionOrThread) == "number" then
				levelOrFunctionOrThread = levelOrFunctionOrThread + 1
			end

			PackedResults = {debug.info(levelOrFunctionOrThread, ConcatenatedShuffledOptions)}
		end
	end

	local ActualReturn = {}
	for Option in string.gmatch(Options, ".") do
		local Indice = table.find(ShuffledOptions, Option)
		table.insert(ActualReturn, PackedResults[Indice])

		if Option == "a" then
			table.insert(ActualReturn, PackedResults[Indice + 1])
		end
	end

	return table.unpack(ActualReturn)
end

local OAC_ISCCLOSURE = function(Closure)
	return not pcall(function()
		setfenv(Closure, getfenv(Closure))
	end)
end

local OAC_ISLCLOSURE = function(Closure)
	return not OAC_ISCCLOSURE(Closure)
end

local OAC_GETCALLERFROMXPCALL = function(Handler)
	return select(2, xpcall(Handler, function()
		return OAC_DBGINFO(2, "f")
	end))
end

local OAC_GETUSERDATAMETA = function(UserData)
	local __namecall = OAC_GETCALLERFROMXPCALL(function() UserData:____() end)
	local __newindex = OAC_GETCALLERFROMXPCALL(function() UserData.____ = nil end)
	local __index = OAC_GETCALLERFROMXPCALL(function() return UserData.____ end)

	local __type = OAC_GETTYPE(UserData) ~= "userdata" and OAC_GETTYPE(UserData)
	local __tostring = OAC_GETCALLERFROMXPCALL(function() return tostring(UserData) end) or tostring(UserData)

	return {
		__namecall = __namecall,
		__newindex = __newindex,
		__index = __index,

		__type = __type,
		__tostring = __tostring,
	}
end

local WhitelistedFunctionsCache = {}
local OAC_CHECKCALLSTACK = function(StartAtLevel, EndAtLevel)
	local Level = StartAtLevel or 2
	local Closure = OAC_DBGINFO(Level, "f")

	while Closure do
		Closure = OAC_DBGINFO(Level, "f")
		if not Closure then
			break
		end

		local Source, Name = OAC_DBGINFO(Closure, "sn")
		if EndAtLevel and Level >= EndAtLevel then --// Can't find any external calls
			return true
		end

		if OAC_ISCCLOSURE(Closure) then --// Exploit's cclosure handler if name is empty
			continue
		end

		local ClosureEnv = getfenv(Closure)
		local LevelEnv = getfenv(Level)

		if Source == BaseSource then
			Level += 1
			continue
		end

		if BaseEnv ~= ClosureEnv or BaseEnv ~= LevelEnv then
			return false
		end

		if ClosureEnv ~= LevelEnv then --// Trampoline Call
			warn(3)
			return false
		end

		Level += 1
	end

	return true
end

local OAC_CHECKLCLOSURE = function(Closure)
	if OAC_ISCCLOSURE(Closure) then --// Ignore if it's a C Closure
		return true
	end

	if BaseEnv ~= getfenv(Closure) then
		return false
	end

	if BaseSource ~= OAC_DBGINFO(Closure, "s") then
		return false
	end

	--if LPH_OBFUSCATED and OAC_DBGINFO(Closure, "l") ~= 1 then
	--	return false
	--end

	return true
end

local OAC_COROWRAP = function(Closure, Count)
	local Wrapped = Closure

	for _ = 1, Count or 198 do --// 198 Cause we also need to reserve for stack
		Wrapped = coroutine.wrap(Wrapped)
	end

	return Wrapped
end

local OAC_REMOVESCRIPTTRACE = function(ErrorMessage)
	return (string.gsub(ErrorMessage, ".+:%d+: ", ""))
end

local OAC_DYNSTR = function(String)
	return `{String}\000!OpenAC!{RandomUTF8String()}{RandomUTF8String()}`
end

local OAC_SELFCALL = function(self, Method, ...)
	return self[OAC_DYNSTR(string.lower(string.sub(Method, 1, 1)) .. string.sub(Method, 2, -1))](self, ...)
end

local OAC_GETIDX = function(self, Index)
	return self[OAC_DYNSTR(Index)]
end

local OAC_SETIDX = function(self, Index, Value)
	self[OAC_DYNSTR(Index)] = Value
end

local OAC_CONNECT = function(self, Event, Closure)
	return OAC_SELFCALL(OAC_GETIDX(self, Event), "connect", Closure)
end

local OAC_GETPHYSICSFPS = function()
	local FallenPartsDestroyHeight = OAC_GETIDX(workspace, "FallenPartsDestroyHeight")

	while true do
		local Part = Instance.new("Part")

		OAC_SETIDX(Part, "Name", `OPEN_AC!{RandomUTF8String()}`)
		OAC_SETIDX(Part, "Position", Vector3.new(0, (-10) + (500 - FallenPartsDestroyHeight), 0))
		OAC_SETIDX(Part, "Transparency", 1)
		OAC_SETIDX(Part, "CanCollide", false)
		OAC_SETIDX(Part, "Parent", workspace)

		local Start = os.clock()
		while OAC_GETIDX(OAC_GETIDX(Part, "Position"), "Y") > FallenPartsDestroyHeight do
			FastWait()
		end

		local Elapsed = os.clock() - Start
		OAC_SELFCALL(Part, "Destroy")

		local PhysicsFPS = 133 / Elapsed
		return PhysicsFPS
	end
end

local DeprecatedGetService = OAC_GETIDX(game, "service")
local OAC_GETSERVICE = function(Singleton, ServiceProvider) --> Gets a singleton from the ServiceProvider
	return DeprecatedGetService(ServiceProvider or game, OAC_DYNSTR(Singleton))
end

local ObjectOAC_RBXCRASH = Instance.new("BindableFunction")
local OAC_RBXCRASH = function()
	local Count = 0

	local Descendants = OAC_SELFCALL(game, "GetDescendants")
	local MassArgs = {}

	for Idx = 1, 255 do
		MassArgs[Idx] = Descendants[Idx]
	end

	OAC_SETIDX(ObjectOAC_RBXCRASH, "OnInvoke", function(Count, ...)
		if Count % 100 == 0 and coroutine.isyieldable() then
			task.wait()
		end

		return OAC_SELFCALL(ObjectOAC_RBXCRASH, "Invoke", Count + 1, table.unpack(MassArgs), {
			[setmetatable({}, {
				__tostring = function()
					OAC_SELFCALL(ObjectOAC_RBXCRASH, "Invoke", 1)
					return ""
				end,
			})] = true
		})
	end)

	OAC_SELFCALL(ObjectOAC_RBXCRASH, "Invoke", 0, table.unpack(MassArgs))
	--LPH_CRASH()
end
OAC_SETIDX(ObjectOAC_RBXCRASH, "OnInvoke", OAC_RBXCRASH)

local Yielding = {}
local OAC_CHECKREF = function(Object, DetectionName)
	if not OAC_CHECKCALLSTACK() then
		OAC_RBXCRASH()
	end

	local DummyTable = {}
	local WeakMT = setmetatable({DummyTable, 1, function() end, Object}, { __mode = OAC_DYNSTR("kv") })

	local MainThread = coroutine.running()
	Yielding[MainThread] = {os.clock(), DetectionName}

	DummyTable = nil
	Object = nil

	while WeakMT[1] or rawget(WeakMT, 1) do
		FastWait()
	end

	FastWait(0.5)
	if
		not ((WeakMT[2] or WeakMT[3]) or
			(rawget(WeakMT, 2) or rawget(WeakMT, 3)))
	then
		OAC_RBXCRASH()
	end

	Yielding[MainThread] = nil
	return not not (rawget(WeakMT, 4) or WeakMT[4])
end

-- // Env Protection
local SignalToken = -math.random() % math.random()
local SendSignal = nil

-- // Services
local Players = OAC_GETSERVICE("Players")
local RunService = OAC_GETSERVICE("RunService")
local ReplicatedStorage = OAC_GETSERVICE("ReplicatedStorage")
local BrowserService = OAC_GETSERVICE("BrowserService")
local InsertService = OAC_GETSERVICE("InsertService")
local HttpService = OAC_GETSERVICE("HttpService")
local MarketplaceService = OAC_GETSERVICE("MarketplaceService")
local ContentProvider = OAC_GETSERVICE("ContentProvider")
local GuiService = OAC_GETSERVICE("GuiService")
local StatsService = Stats()

-- // Variables
local LocalPlayer = OAC_GETIDX(Players, "LocalPlayer")
local OpenACStorage = OAC_SELFCALL(ReplicatedStorage, "WaitForChild", "OpenAC")
local OriginalGameMt = OAC_GETUSERDATAMETA(game)

local JSONEncode = HttpService.JSONEncode
local Base64Encode = function(String)
	return string.sub(JSONEncode(HttpService, buffer.fromstring(String)), 34, -3)
end

					--[[
						> Signals Documentation:
							GvzwtroRbFIXn3ip => OACSetCurrentDetection: (DetectionName: string, Detection) Updates detection
							xoU1onWnYb1X2hJu => OACThreadHandshake: (ThreadName: string, Thread) Updates detection registry

						> Args:
							Method = Cf. signal docs strings
							RequestStepNumber = Upvalue needs to match StepNumber
							... = Args
					]]

local CachedServerTime = OAC_SELFCALL(workspace, "GetServerTimeNow")
local CachedLocalClock = os.clock()
local GetServerTimeNow = function()
	local _ElapsedTime = os.clock() - CachedLocalClock
	return CachedServerTime + _ElapsedTime
end

local HandshakeRemote = nil
local SendSignal = function(Method, RequestStepNumber, ...)
	--// Environment & caller checks
	if not OAC_CHECKCALLSTACK() then
		return OAC_RBXCRASH()
	end

	if RequestStepNumber ~= SignalToken then
		return OAC_RBXCRASH()
	end

	SignalToken += 1545962950 % math.random()

	--// Handle request
	if Method == "GvzwtroRbFIXn3ip" then --// Detection
		if CurrentDetection then --// We ignore to not overwrite the first one
			return
		end

		CurrentDetection = {
			[StringToHex("DetectionName")] = StringToHex(...),
			[StringToHex("Args")] = {select(2, ...)}
		}

		if not HandshakeRemote then --// Just in case they like made it not get the remote (???)
			OAC_RBXCRASH()
		end

		print("OACSetCurrentDetection Signal:", ...)
	elseif Method == "xoU1onWnYb1X2hJu" then --// Handshake
		DetectionRegistry[StringToHex(...)][StringToHex("LastHandshake")] = Base64Encode(StringToHex(GetServerTimeNow() / 1.478 + 303877276))

		--print("OACThreadHandshake Signal:", ..., DetectionRegistry[StringToHex(...)][StringToHex("LastHandshake")])
	else
		OAC_RBXCRASH()
	end
end

local MakeDetection = function(DetectionName, Function)
	local DetectionNameHex = StringToHex(DetectionName)
	local ThreadHex = StringToHex("Thread")
	local LastHandshakeHex = StringToHex("LastHandshake")

	DetectionRegistry[DetectionNameHex] = {
		[ThreadHex] = nil,
		[LastHandshakeHex] = StringToHex("0")
	}

	DetectionRegistry[DetectionNameHex][ThreadHex] = task.spawn(Function, DetectionName)
	return DetectionRegistry[DetectionNameHex][ThreadHex]
end

--// Protect script
OAC_SETIDX(script, "Archivable", false)
OAC_SETIDX(script, "Disabled", true)
OAC_SETIDX(script, "Enabled", false)
OAC_SETIDX(script, "LinkedSource", "rbxassetid://0")
OAC_SETIDX(script, "Parent", nil)
OAC_SELFCALL(script, "Destroy")
script = nil

--// Detection: OpenAC/InternalFunctionTampering
					--[[
						Checks for any internal function tampering by checking their debugger information.
					]] 
MakeDetection("OpenAC/InternalFunctionTampering", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(0.75) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		if
			not OAC_CHECKLCLOSURE(OAC_DYNSTR) or
			not OAC_CHECKLCLOSURE(OAC_SELFCALL) or
			not OAC_CHECKLCLOSURE(OAC_GETIDX) or
			not OAC_CHECKLCLOSURE(OAC_SETIDX) or
			not OAC_CHECKLCLOSURE(OAC_RBXCRASH) or

			not OAC_CHECKLCLOSURE(RandomUTF8String) or
			not OAC_CHECKLCLOSURE(SendSignal) or
			not OAC_CHECKLCLOSURE(MakeDetection)
		then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end
	end
end)

--// Detection: OpenAC/CoreGui
					--[[
						Checks for scripts referencing CoreGui without properly cloning the reference.
					]]
MakeDetection("OpenAC/CoreGui", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait() do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		if OAC_CHECKREF(OAC_GETSERVICE("CoreGui"), Detection) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end
	end
end)

--// Detection: OpenAC/MessageBusService
					--[[
						Checks for scripts referencing MessageBusService (to avoid an RCE, most of the time).
					]]
MakeDetection("OpenAC/MessageBusService", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait() do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		if OAC_CHECKREF(game:GetService("MessageBusService"), Detection) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end
	end
end)

--// Detection: OpenAC/InstanceCount
					--[[
						Checks for an abnormally hight InstanceCount spike.
					]]
-- MakeDetection("OpenAC/InstanceCount", function(Detection)
-- 	local OldInstanceCount = OAC_GETIDX(StatsService, "InstanceCount")
-- 	if not OAC_SELFCALL(game, "IsLoaded") then
-- 		OAC_SELFCALL(OAC_GETIDX(game, "Loaded"), "Wait")
-- 	end

-- 	local function IdentifySpikeOrigin(Spike)
-- 		if Spike > 465 and Spike < 480 then
-- 			return "Infinite Yield"
-- 		elseif Spike > 620 and Spike < 635 then
-- 			return "Fates Admin"
-- 		end

-- 		return "Unknown"
-- 	end

-- 	local Start = os.clock()
-- 	OAC_CONNECT(RunService, "PreRender", function()
-- 		local NewInstanceCount = OAC_GETIDX(StatsService, "InstanceCount")

-- 		local Spike = NewInstanceCount - OldInstanceCount
-- 		local AbsoluteSpike = math.abs(Spike)

-- 		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

-- 		if AbsoluteSpike >= 465 and AbsoluteSpike <= 640 and os.clock() - Start >= 5 then
-- 			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, Spike, IdentifySpikeOrigin(Spike))
-- 		end

-- 		OldInstanceCount = NewInstanceCount
-- 	end)
-- end)

--// Detection: OpenAC/ScriptContext
					--[[
						Checks for scripts referencing ScriptContext (usually to disconnect the .Error event).
					]]
MakeDetection("OpenAC/ScriptContext", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait() do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		if OAC_CHECKREF(game:GetService("ScriptContext"), Detection) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end
	end
end)

--// Detection: OpenAC/PhysicsAcceleration
					--[[
						Checks for the Physics FPS going above 65 (FFlag Modification).
					]]
MakeDetection("OpenAC/PhysicsAcceleration", function(Detection)
	debug.setmemorycategory(Detection)

	local Start = os.clock()
	task.spawn(function()
		while FastWait() do
			if os.clock() - Start > 80 then
				continue
			end

			SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
		end
	end)

	while FastWait() do
		Start = os.clock()
		local PhysicsFPS = OAC_GETPHYSICSFPS()

		if PhysicsFPS >= 65 then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, PhysicsFPS)
		end
	end
end)

--// Detection: OpenAC/CWHooking
					--[[
						Checks for hooks on specified functions
					]]
MakeDetection("OpenAC/CWHooking", function(Detection)
	debug.setmemorycategory(Detection)

	local FunctionsToCheck = {
		SignalConnect = OAC_GETIDX(game, "DescendantAdded").Connect,
		FindFirstChild = OAC_GETIDX(game, "FindFirstChild"),
		GetChildren = OAC_GETIDX(game, "GetChildren"),
		GetMemoryUsageMbForTag = OAC_GETIDX(StatsService, "GetMemoryUsageMbForTag"),
		OpenBrowserWindow = OAC_GETIDX(BrowserService, "OpenBrowserWindow"),

		pcall = pcall,
		gcinfo = gcinfo,
		corowrap = coroutine.wrap,

		__namecall = OriginalGameMt.__namecall,
		__newindex = OriginalGameMt.__newindex,
		__index = OriginalGameMt.__index,
	}

	local FunctionNoArgs = {
		"gcinfo"
	}

	while FastWait(3) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		for FunctionName, Closure in FunctionsToCheck do
			local Wrapped = OAC_COROWRAP(Closure)
			local Success, Error = pcall(Wrapped)

			if Success and (not table.find(FunctionNoArgs, FunctionName)) then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, FunctionName, 1)
			end

			if Error == "C Stack Overflow" then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, FunctionName, 2)
			end

			FastWait(0.25)
		end

		if pcall(OAC_COROWRAP(gcinfo, 200)) then --// Shouldn't work
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 3)
		end
	end
end)

--// Detection: OpenAC/GetGCReg
					--[[
						Checks for getgc and or getreg being called.
						TODO: Bad cause it uses memory
					]]
MakeDetection("OpenAC/GetGCReg", function(Detection)
	debug.setmemorycategory(Detection)

	local FunctionCache, ThreadCache = {}, {}
	--local LastFunction, LastThread

	task.spawn(function()
		local BaseFunction = function() end

		for i = 1, 1e5 do
			ThreadCache[i] = task.spawn(BaseFunction)
		end
	end)

	for i = 1, 4e6 do
		FunctionCache[i] = function()
			return i
		end
	end

	--LastFunction = FunctionCache[#FunctionCache]
	--LastThread = ThreadCache[#ThreadCache]

	--FunctionCache, ThreadCache = nil, nil

	local NewGC = collectgarbage("count")
	while FastWait() do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		local Diff = collectgarbage("count") - NewGC
		if Diff > 4e4 then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, Diff)
		end

		NewGC = collectgarbage("count")
	end
end)

--// Detection: OpenAC/GameMetatableHook
					--[[
						Checks for the game's metatable's metamethods being hooked.
					]]
MakeDetection("OpenAC/GameMetatableHook", function(Detection)
	debug.setmemorycategory(Detection)

	local Metas = {}
	local MakeErrorHandler = function(Metamethod)
		return function()
			for Level = 2, 10 do
				local Closure = OAC_DBGINFO(Level, "f")
				if not Closure then
					break
				end

				if Level == 2 then
					Metas[Metamethod] = Closure
				end

				if getfenv(Level) == BaseEnv then
					continue
				end

				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1, Metamethod)
			end

			return OAC_DBGINFO(2, "f")
		end
	end

	while FastWait(2) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
		local Success1 = xpcall(function() game:FindFirstChild() end, MakeErrorHandler("__namecall"))
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
		local Success2 = xpcall(function() return game[nil] end, MakeErrorHandler("__index"))
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
		local Success3 = xpcall(function() game[nil] = nil end, MakeErrorHandler("__newindex"))
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		if Metas.__namecall ~= OriginalGameMt.__namecall then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 2, "__namecall")
		end

		if Metas.__index ~= OriginalGameMt.__index then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 2, "__index")
		end

		if Metas.__newindex ~= OriginalGameMt.__newindex then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 2, "__newindex")
		end

		if Success1 or Success2 or Success3 then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 3)
		end
	end
end)

--// Detection: OpenAC/HookCrasherGameMT
					--[[
						Checks for hooks on game metamethods using the hook crashing method.
					]]
MakeDetection("OpenAC/HookCrasherGameMT", function(Detection)
	debug.setmemorycategory(Detection)

	local ErrorHandler = function()
		return OAC_DBGINFO(2, "f")
	end

	local _, __namecall = xpcall(function() return game:FindFirstChild() end, ErrorHandler)
	local _, __index = xpcall(function() return game[nil] end, ErrorHandler)
	local _, __newindex = xpcall(function() game[nil] = nil end, ErrorHandler)

	local BaseFunction = function() end

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		pcall(OAC_CRASHHOOK, 0, BaseFunction)
		local Success1, Error1 = pcall(OAC_CRASHHOOK, 0, BaseFunction)
		local Success2, Error2 = pcall(OAC_CRASHHOOK, 0, __namecall, game)
		local Success3, Error3 = pcall(OAC_CRASHHOOK, 0, __index, game, nil)
		local Success4, Error4 = pcall(OAC_CRASHHOOK, 0, __newindex, game, nil, nil)

		if Success1 or Error1 ~= "error in error handling" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1)
		elseif Success2 or Error2 ~= "Argument 1 missing or nil" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1, "__namecall")
		elseif Success3 or OAC_REMOVESCRIPTTRACE(Error3) ~= "invalid argument #2 (string expected, got nil)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1, "__index")
		elseif Success4 or OAC_REMOVESCRIPTTRACE(Error4) ~= "invalid argument #2 (string expected, got nil)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1, "__newindex")
		end
	end
end)

--// Detection: OpenAC/HookCrasher
					--[[
						Checks for hooks on many functions using the hook crashing method.
					]]
MakeDetection("OpenAC/HookCrasher", function(Detection)
	debug.setmemorycategory(Detection)
	local BaseFunction = function() end

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		pcall(OAC_CRASHHOOK, 0, BaseFunction)
		local Success1, Error1 = pcall(OAC_CRASHHOOK, 0, BaseFunction)

		local Success2, Error2 = pcall(OAC_CRASHHOOK, 0, rawget)
		local Success3, Error3 = pcall(OAC_CRASHHOOK, 0, rawlen)
		local Success4, Error4 = pcall(OAC_CRASHHOOK, 0, rawset)
		local Success5, Error5 = pcall(OAC_CRASHHOOK, 0, tostring)
		local Success6, Error6 = pcall(OAC_CRASHHOOK, 0, unpack)
		local Success7, Error7 = pcall(OAC_CRASHHOOK, 0, table.find)
		local Success8, Error8 = pcall(OAC_CRASHHOOK, 0, os.date, newproxy())
		local Success9, Error9 = pcall(OAC_CRASHHOOK, 0, setmetatable)
		local Success10, Error10 = pcall(OAC_CRASHHOOK, 0, getmetatable)
		local Success11, Error11 = pcall(OAC_CRASHHOOK, 0, getfenv, -1)
		local Success12, Error12 = pcall(OAC_CRASHHOOK, 0, setfenv)
		local Success13, Error13 = pcall(OAC_CRASHHOOK, 0, collectgarbage)
		local Success14, Error14 = pcall(OAC_CRASHHOOK, 0, select)
		local Success15, Error15 = pcall(OAC_CRASHHOOK, 0, coroutine.wrap)
		local Success16, Error16 = pcall(OAC_CRASHHOOK, 0, debug.info)
		local Success17, Error17 = pcall(OAC_CRASHHOOK, 0, debug.traceback, {})
		local Success18, Error18 = pcall(OAC_CRASHHOOK, 0, coroutine.status)
		local Success19, Error19 = pcall(OAC_CRASHHOOK, 0, task.spawn)
		local Success20, Error20 = pcall(OAC_CRASHHOOK, 0, HttpService.RequestInternal)
		local Success21, Error21 = pcall(OAC_CRASHHOOK, 0, game.GetService) --// Electron detection

		if Success1 or Error1 ~= "error in error handling" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1)
		elseif Success2 or OAC_REMOVESCRIPTTRACE(Error2) ~= "missing argument #1 to 'rawget' (table expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 2)
		elseif Success3 or OAC_REMOVESCRIPTTRACE(Error3) ~= "invalid argument #1 to 'rawlen' (table or string expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 3)
		elseif Success4 or OAC_REMOVESCRIPTTRACE(Error4) ~= "missing argument #1 to 'rawset' (table expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 4)
		elseif Success5 or OAC_REMOVESCRIPTTRACE(Error5) ~= "missing argument #1" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 5)
		elseif Success6 or OAC_REMOVESCRIPTTRACE(Error6) ~= "missing argument #1 to 'unpack' (table expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 6)
		elseif Success7 or OAC_REMOVESCRIPTTRACE(Error7) ~= "missing argument #1 to 'find' (table expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 7)
		elseif Success8 or OAC_REMOVESCRIPTTRACE(Error8) ~= "invalid argument #1 to 'date' (string expected, got userdata)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 8)
		elseif Success9 or OAC_REMOVESCRIPTTRACE(Error9) ~= "missing argument #1 to 'setmetatable' (table expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 9)
		elseif Success10 or OAC_REMOVESCRIPTTRACE(Error10) ~= "missing argument #1" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 10)
		elseif Success11 or OAC_REMOVESCRIPTTRACE(Error11) ~= "invalid argument #1 to 'getfenv' (level must be non-negative)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 11)
		elseif Success12 or OAC_REMOVESCRIPTTRACE(Error12) ~= "missing argument #2 to 'setfenv' (table expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 12)
		elseif Success13 or OAC_REMOVESCRIPTTRACE(Error13) ~= "missing argument #1 to 'collectgarbage' (string expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 13)
		elseif Success14 or OAC_REMOVESCRIPTTRACE(Error14) ~= "missing argument #1 to 'select' (number expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 14)
		elseif Success15 or OAC_REMOVESCRIPTTRACE(Error15) ~= "missing argument #1 to 'wrap' (function expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 15)
		elseif Success16 or OAC_REMOVESCRIPTTRACE(Error16) ~= "invalid argument #1 to 'info' (function or level expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 16)
		elseif Success17 or OAC_REMOVESCRIPTTRACE(Error17) ~= "invalid argument #1 to 'traceback' (string expected, got table)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 17)
		elseif Success18 or OAC_REMOVESCRIPTTRACE(Error18) ~= "missing argument #1 to 'status' (thread expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 18)
		elseif Success19 or OAC_REMOVESCRIPTTRACE(Error19) ~= "invalid argument #1 to 'spawn' (function or thread expected)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 19)
		elseif Success20 or Error20 ~= "The current thread cannot call 'RequestInternal' (lacking capability RobloxScript)" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 20)
		elseif Success21 or Error21 ~= "Expected ':' not '.' calling member function GetService" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 21)
		end
	end
end)

--// Detection: OpenAC/ScriptError
					--[[
						Checks for errors on exploit scripts.
					]]
MakeDetection("OpenAC/ScriptError", function(Detection)
	debug.setmemorycategory(Detection)

	local LuauLoadPattern = "^'%[string \".+\"%]'"
	local ACPattern = "^ReplicatedFirst.nil"

	OAC_CONNECT(OAC_GETSERVICE("ScriptContext"), "Error", function(Message, _, Script)
		if string.find(Message, ACPattern) then
			return
		end

		if string.find(Message, LuauLoadPattern) or (not Script) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, Message, Script and OAC_SELFCALL(Script, "GetFullName"))
		end
	end)

	OAC_CONNECT(OAC_GETSERVICE("LogService"), "MessageOut", function(Message, MessageType)
		if MessageType ~= Enum.MessageType.MessageError then
			return
		end

		if not string.find(Message, "^'%[string \".+\"%]'") then
			return
		end

		return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, Message)
	end)

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/Wave
					--[[
						Checks for Wave.
					]]
MakeDetection("OpenAC/Wave", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(1) do
		local Success, Error = pcall(HttpService.RequestInternal, HttpService)
		if Success or string.find(Error, "Attempt to call blocked function") then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/CharacterManipulation
					--[[
						Checks for the CFrame being set.
					]]
MakeDetection("OpenAC/CharacterManipulation", function(Detection)
	debug.setmemorycategory(Detection)

	local MakeFunctionConnection = function(Object)
		return function()
			if not OAC_SELFCALL(HandshakeRemote, "InvokeServer") then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, OAC_GETIDX(Object, "Name"))
			end
		end
	end

	local GotCalled = false
	local MakeConnections = function(Character)
		GotCalled = true

		for _, Object in OAC_SELFCALL(Character, "GetChildren") do
			if not OAC_SELFCALL(Object, "IsA", "BasePart") then
				continue
			end

			OAC_SELFCALL(
				OAC_SELFCALL(
					Object,
					"GetPropertyChangedSignal", "CFrame"
				),

				"Connect",

				MakeFunctionConnection(Object)
			)

			OAC_SELFCALL(
				OAC_SELFCALL(
					Object,
					"GetPropertyChangedSignal", "Position"
				),

				"Connect",

				MakeFunctionConnection(Object)
			)

			OAC_SELFCALL(
				OAC_SELFCALL(
					Object,
					"GetPropertyChangedSignal", "Rotation"
				),

				"Connect",

				MakeFunctionConnection(Object)
			)
		end
	end

	if CharacterChecksEnabled then
		OAC_CONNECT(LocalPlayer, "CharacterAdded", MakeConnections)
	end

	local PotentialCharacter = OAC_GETIDX(LocalPlayer, "Character")
	if PotentialCharacter and (not GotCalled) then
		MakeConnections(PotentialCharacter)
	end

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/V4
					--[[
						Checks for V4 being executed.
					]]
MakeDetection("OpenAC/V4", function(Detection)
	debug.setmemorycategory(Detection)

	local PlayerGui = OAC_SELFCALL(LocalPlayer, "WaitForChild", "PlayerGui", 10)
	if not PlayerGui then
		OAC_RBXCRASH()
	end

	OAC_CONNECT(PlayerGui, "ChildAdded", function(Child)
		if OAC_GETIDX(Child, "ClassName") ~= "ScreenGui" then
			return
		end

		if OAC_GETIDX(Child, "DisplayOrder") ~= 999 then
			return
		end

		if OAC_GETIDX(Child, "ZIndexBehavior") ~= Enum.ZIndexBehavior.Global then
			return
		end

		if OAC_GETIDX(Child, "ResetOnSpawn") then
			return
		end

		local GuiName = OAC_GETIDX(Child, "Name")
		if #GuiName < 10 or #GuiName > 100 then
			return
		end

		local Found = {}
		for Character in string.gmatch(GuiName, ".") do
			local AsciiValue = string.byte(Character)
			if AsciiValue < 32 or AsciiValue > 126 then
				return
			end

			table.insert(Found, Character)
		end

		if #Found ~= #GuiName then
			return
		end

		return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
	end)

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/CheckRefYielding
					--[[
						Checks for suspiciously long yielding on OAC_CHECKREF.
					]]
MakeDetection("OpenAC/CheckRefYielding", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(1) do
		for _, YieldInfo in Yielding do
			if os.clock() - YieldInfo[1] <= 360 then --// I don't know why it has to be so high
				SendSignal("xoU1onWnYb1X2hJu", SignalToken, YieldInfo[2]) --// To not get a wrong detection
				continue
			end

			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, YieldInfo[2])
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/NamecallHook
					--[[
						Detects __namecall hooks using the __tostring environment leak method.
					]]
MakeDetection("OpenAC/NamecallHook", function(Detection)
	debug.setmemorycategory(Detection)

	local Called = false
	local Trap = setmetatable({}, {
		__tostring = function(self)
			if getfenv(4) ~= BaseEnv then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1)
			end

			if getfenv(OAC_DBGINFO(4, "f")) ~= BaseEnv then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 2)
			end

			if OAC_DBGINFO(4, "s") ~= BaseSource then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 3)
			end

			if coroutine.isyieldable() then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 4)
			end

			Called = true
			return ""
		end
	})

	Trap = {[Trap] = true}

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
		game:FindFirstChild(Trap)

		if not Called then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 5)
		end

		Called = false
	end
end)

--// Detection: OpenAC/NamecallCStack
					--[[
						Detects __namecall hooks using the C stack overflow method.
					]]
MakeDetection("OpenAC/NamecallCStack", function(Detection)
	debug.setmemorycategory(Detection)

	local CallCount = 0
	local Trap = setmetatable({}, {
		__tostring = function(self)
			CallCount += 1
			return tostring(self)
		end
	})

	Trap = {[Trap] = true}

	while FastWait(1) do
		CallCount = 0
		local Success, Error = pcall(function()
			game:FindFirstChild(Trap)
		end)

		if Success or Error ~= "C stack overflow" then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 1)
		end

		if CallCount ~= 196 then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, 2, CallCount)
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/SelfManipulation
					--[[
						Detects self being manipulated when calling a game metamethod.
					]]
MakeDetection("OpenAC/SelfManipulation", function(Detection)
	debug.setmemorycategory(Detection)

	local CurrentGameMt = OAC_GETUSERDATAMETA(game)

	local DFunc = function(...)
		local ArgCount = select("#", ...)
		local Metamethod =
			ArgCount == 1 and "__tostring" or
			ArgCount == 2 and "__index" or
			ArgCount == 3 and "__newindex" or "???"

		SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, Metamethod)
		return ""
	end

	local Trap = setmetatable({}, {
		__index = DFunc,
		__newindex = DFunc,
		__tostring = DFunc
	})

	while FastWait(1) do
		pcall(CurrentGameMt.__namecall, Trap)
		pcall(CurrentGameMt.__index, Trap, Trap)
		pcall(CurrentGameMt.__newindex, Trap, Trap, Trap)

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/NonGameMetaCClosure
					--[[
						Detects when the game metamethods aren't C Closures
					]]
MakeDetection("OpenAC/NonGameMetaCClosure", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(1) do
		local NewMt = OAC_GETUSERDATAMETA(game)

		if OAC_ISLCLOSURE(NewMt.__namecall) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "__namecall")
		elseif OAC_ISLCLOSURE(NewMt.__newindex) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "__newindex")
		elseif OAC_ISLCLOSURE(NewMt.__index) then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "__index")
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/GameMetamethodVararg
					--[[
						Detects when the vararg C Closure rule is not respected by game metamethods, indicating a hook.
					]]
MakeDetection("OpenAC/GameMetamethodVararg", function(Detection)
	debug.setmemorycategory(Detection)

	local NamecallVarargError = "Trying to call method on object of type: `DataModel` with incorrect arguments."
	local NormalVarargError = "missing argument #2 (string expected)" --// Uses lua_error's default message

	while FastWait(1) do
		local Success1, Error1 = pcall(OriginalGameMt.__namecall, game)
		local Success2, Error2 = pcall(OriginalGameMt.__newindex, game)
		local Success3, Error3 = pcall(OriginalGameMt.__index, game)

		if Success1 or Error1 ~= NamecallVarargError then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "__namecall")
		elseif Success2 or Error2 ~= NormalVarargError then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "__newindex")
		elseif Success3 or Error3 ~= NormalVarargError then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "__index")
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/Saveinstance
					--[[
						Detects when saveinstance is called.
					]]
MakeDetection("OpenAC/Saveinstance", function(Detection)
	debug.setmemorycategory(Detection)

	local BuggedInstances = {
		Animator = Instance.new("Animator"),
		TestService = Instance.new("TestService"),
		VirtualInputManager = Instance.new("VirtualInputManager"),
		ProximityPromptService = Instance.new("ProximityPromptService")
	}

	while FastWait(1) do
		BuggedInstances = BuggedInstances --// In order to hold a reference
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/UniversalSynSaveinstance
					--[[
						Detects when UniversalSynSaveinstance is used.
					]]
MakeDetection("OpenAC/UniversalSynSaveinstance", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(1) do
		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)

		if OAC_CHECKREF(OAC_GETSERVICE("CorePackages"), Detection) then
			return OAC_RBXCRASH()	--// We don't want them to save the game before a server action is taken,
			--// Else the detection is useless
		end
	end
end)

--// Detection: OpenAC/EnvironmentLeak
					--[[
						Detects when the exploit's environment leaks to the main thread.
					]]
MakeDetection("OpenAC/EnvironmentLeak", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(1) do
		--// Overkill but it works

		--// BrowserService
		local Success1, Error1 = pcall(function() BrowserService:ExecuteJavaScript() end)
		local Success2, Error2 = pcall(function() BrowserService:OpenBrowserWindow() end)
		local Success3, Error3 = pcall(function() BrowserService:CloseBrowserWindow() end)
		local Success4, Error4 = pcall(function() BrowserService:OpenNativeOverlay() end)
		local Success5, Error5 = pcall(function() BrowserService:CopyAuthCookieFromBrowserToEngine() end)

		--// InsertService
		local Success6, Error6 = pcall(function() InsertService:LoadLocalAsset() end)

		--// HttpService
		local Success7, Error7 = pcall(function() HttpService:RequestInternal() end)

		--// MarketplaceService
		local Success8, Error8 = pcall(function() MarketplaceService:GetRobuxBalance() end)
		local Success9, Error9 = pcall(function() MarketplaceService:PerformPurchase() end)
		local Success10, Error10 = pcall(function() MarketplaceService:PerformPurchaseV2() end)
		local Success11, Error11 = pcall(function() MarketplaceService:PerformSubscriptionPurchase() end)
		local Success12, Error12 = pcall(function() MarketplaceService:PerformSubscriptionPurchaseV2() end)

		--// DataModel
		local Success13, Error13 = pcall(function() game:HttpGetAsync() end)
		local Success14, Error14 = pcall(function() game:HttpPostAsync() end)
		local Success15, Error15 = pcall(function() game:OpenVideosFolder() end)
		local Success16, Error16 = pcall(function() game:OpenScreenshotsFolder() end)

		if Success1 or Error1 ~= "The current thread cannot call 'ExecuteJavaScript' (lacking capability RobloxScript)" or
			Success2 or Error2 ~= "The current thread cannot call 'OpenBrowserWindow' (lacking capability RobloxScript)" or
			Success3 or Error3 ~= "The current thread cannot call 'CloseBrowserWindow' (lacking capability RobloxScript)" or
			Success4 or Error4 ~= "The current thread cannot call 'OpenNativeOverlay' (lacking capability RobloxScript)" or
			Success5 or Error5 ~= "The current thread cannot call 'CopyAuthCookieFromBrowserToEngine' (lacking capability RobloxScript)" or
			Success6 or Error6 ~= "The current thread cannot call 'LoadLocalAsset' (lacking capability RobloxScript)" or
			Success7 or Error7 ~= "The current thread cannot call 'RequestInternal' (lacking capability RobloxScript)" or
			Success8 or Error8 ~= "The current thread cannot call 'GetRobuxBalance' (lacking capability RobloxScript)" or
			Success9 or Error9 ~= "The current thread cannot call 'PerformPurchase' (lacking capability RobloxScript)" or
			Success10 or Error10 ~= "The current thread cannot call 'PerformPurchaseV2' (lacking capability RobloxScript)" or
			Success11 or Error11 ~= "The current thread cannot call 'PerformSubscriptionPurchase' (lacking capability RobloxScript)" or
			Success12 or Error12 ~= "The current thread cannot call 'PerformSubscriptionPurchaseV2' (lacking capability RobloxScript)" or
			Success13 or Error13 ~= "The current thread cannot call 'HttpGetAsync' (lacking capability RobloxScript)" or
			Success14 or Error14 ~= "The current thread cannot call 'HttpPostAsync' (lacking capability RobloxScript)" or
			Success15 or Error15 ~= "The current thread cannot call 'OpenVideosFolder' (lacking capability RobloxScript)" or
			Success16 or Error16 ~= "The current thread cannot call 'OpenScreenshotsFolder' (lacking capability RobloxScript)"
		then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/CoreGuiImage
					--[[
						Detects when a suspicious image is added to CoreGui.
					]]
MakeDetection("OpenAC/CoreGuiImage", function(Detection)
	debug.setmemorycategory(Detection)

	local BlockedAssetIDs = {
		["rbxassetid://1352543873"] = "Infinite Yield"
	}

	while FastWait(1) do
		for AssetID, Name in BlockedAssetIDs do
			if ContentProvider:GetAssetFetchStatus(AssetID) == Enum.AssetFetchStatus.Success then
				return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, Name)
			end
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/VirtualInput
					--[[
						Detects when VirtualInputManager or VirtualUser services are created.
					]]
MakeDetection("OpenAC/VirtualInput", function(Detection)
	debug.setmemorycategory(Detection)

	while FastWait(1) do
		if game:FindService("VirtualUser") then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		elseif game:FindService("VirtualInputManager") then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Detection: OpenAC/UnnamedESP
					--[[
						Detects when Unnamed-ESP is executed.
					]]
MakeDetection("OpenAC/UnnamedESP", function(Detection)
	debug.setmemorycategory(Detection)

	OAC_CONNECT(OAC_GETSERVICE("LogService"), "MessageOut", function(Message, MessageType)
		if MessageType ~= Enum.MessageType.MessageOutput then
			return
		end

		if not string.find(Message, "Unnamed ESP only officially supports Synapse and Protosmasher!") then
			return
		end

		return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, "MessageOut")
	end)

	if not OAC_SELFCALL(game, "IsLoaded") then
		OAC_SELFCALL(OAC_GETIDX(game, "Loaded"), "Wait")
	end

	task.wait(3) --// Prevent false positives with the CameraModule

	local LastCall = os.clock()
	local FirstTriggered, SecondTriggered = false, false

	OAC_SELFCALL(RunService, "BindToRenderStep", "PlayerList", 299, function()
		if not OAC_GETIDX(GuiService, "MenuIsOpen") and tostring(getfenv(pcall).script) ~= "ControlModule" then
			FirstTriggered = true
		end

		LastCall = os.clock()
	end)

	OAC_SELFCALL(RunService, "BindToRenderStep", "Backpack", 400, function()
		if not OAC_GETIDX(GuiService, "MenuIsOpen") and tostring(getfenv(pcall).script) ~= "ControlModule" then
			SecondTriggered = true
		end

		LastCall = os.clock()
	end)

	while FastWait(1) do
		local LastTimeCalled = os.clock() - LastCall
		if LastTimeCalled > 60 then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection, LastTimeCalled)
		end

		if FirstTriggered and SecondTriggered then
			return SendSignal("GvzwtroRbFIXn3ip", SignalToken, Detection)
		end

		SendSignal("xoU1onWnYb1X2hJu", SignalToken, Detection)
	end
end)

--// Locate handshake remote
while #OAC_SELFCALL(OpenACStorage, "GetChildren") == 0 do
	FastWait()
end

for _, Remote in OAC_SELFCALL(OpenACStorage, "GetChildren") do
	if HexToString(OAC_SELFCALL(Remote, "GetAttribute", "_")) % 15 == 0 then
		HandshakeRemote = Remote
	end
end

--// Ensure the remote was found
if not HandshakeRemote then
	return OAC_RBXCRASH()
end

--// Handshake
local HandshakeProxy = newproxy(true)
local HandshakeMeta = getmetatable(HandshakeProxy)
local HandshakeString = tostring(HandshakeProxy)

HandshakeMeta.__eq = OAC_RBXCRASH
HandshakeMeta.__metatable = "nil"

local StepNumber = 0
HandshakeMeta.__call = function(Proxy, Method, Encrypted, Key, Nonce, NewIncrease, ...)
	if tostring(Proxy) ~= HandshakeString then
		return OAC_RBXCRASH()
	end

	if not OAC_CHECKCALLSTACK() then
		return OAC_RBXCRASH()
	end

	Method = HexToString(Method)

	if Method == "Handshake" then
		if OAC_GETTYPE(NewIncrease) ~= "number" then
			return OAC_RBXCRASH()
		end

		StepNumber += NewIncrease

		--// Function integrity checks
		if
			(OAC_DBGINFO(OAC_CRASHHOOK, "s") ~= BaseSource) or (getfenv(OAC_CRASHHOOK) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_GETTYPE, "s") ~= BaseSource) or (getfenv(OAC_GETTYPE) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_DBGINFO, "s") ~= BaseSource) or (getfenv(OAC_DBGINFO) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_ISCCLOSURE, "s") ~= BaseSource) or (getfenv(OAC_ISCCLOSURE) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_ISLCLOSURE, "s") ~= BaseSource) or (getfenv(OAC_ISLCLOSURE) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_GETCALLERFROMXPCALL, "s") ~= BaseSource) or (getfenv(OAC_GETCALLERFROMXPCALL) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_GETUSERDATAMETA, "s") ~= BaseSource) or (getfenv(OAC_GETUSERDATAMETA) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_CHECKCALLSTACK, "s") ~= BaseSource) or (getfenv(OAC_CHECKCALLSTACK) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_CHECKLCLOSURE, "s") ~= BaseSource) or (getfenv(OAC_CHECKLCLOSURE) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_COROWRAP, "s") ~= BaseSource) or (getfenv(OAC_COROWRAP) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_REMOVESCRIPTTRACE, "s") ~= BaseSource) or (getfenv(OAC_REMOVESCRIPTTRACE) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_DYNSTR, "s") ~= BaseSource) or (getfenv(OAC_DYNSTR) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_SELFCALL, "s") ~= BaseSource) or (getfenv(OAC_SELFCALL) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_GETIDX, "s") ~= BaseSource) or (getfenv(OAC_GETIDX) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_SETIDX, "s") ~= BaseSource) or (getfenv(OAC_SETIDX) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_CONNECT, "s") ~= BaseSource) or (getfenv(OAC_CONNECT) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_GETPHYSICSFPS, "s") ~= BaseSource) or (getfenv(OAC_GETPHYSICSFPS) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_GETSERVICE, "s") ~= BaseSource) or (getfenv(OAC_GETSERVICE) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_RBXCRASH, "s") ~= BaseSource) or (getfenv(OAC_RBXCRASH) ~= BaseEnv) or
			(OAC_DBGINFO(OAC_CHECKREF, "s") ~= BaseSource) or (getfenv(OAC_CHECKREF) ~= BaseEnv)
		then
			return OAC_RBXCRASH()
		end

		local EncryptedDetectionRegistry = {}
		for Name, DetectionInfo in DetectionRegistry do
			local LastHandshake = DetectionInfo[StringToHex("LastHandshake")]

			EncryptedDetectionRegistry[Encrypt(Name, Key, Nonce, StepNumber)] =
				Encrypt(LastHandshake, Key, Nonce, StepNumber)
		end

		local DetectionNameHex = StringToHex("DetectionName")
		local ArgsHex = StringToHex("Args")

		local EncryptedCurrentDetection = {}
		if CurrentDetection then
			EncryptedCurrentDetection[DetectionNameHex] =
				Encrypt(CurrentDetection[DetectionNameHex], Key, Nonce, StepNumber)

			EncryptedCurrentDetection[ArgsHex] = {}
			for Idx, Value in CurrentDetection[ArgsHex] do
				EncryptedCurrentDetection[ArgsHex][Idx] =
					OAC_GETTYPE(Value) == "string" and Encrypt(Value, Key, Nonce, StepNumber) or Value
			end
		end

		return Decrypt(Encrypted, Key, Nonce, StepNumber), EncryptedCurrentDetection, EncryptedDetectionRegistry
	elseif Method == "Crash" then
		OAC_RBXCRASH()
		return
	end
end

OAC_SETIDX(HandshakeRemote, "OnClientInvoke", HandshakeProxy)

--// Cleanup
HandshakeMeta = nil
HandshakeProxy = nil

OAC_CONNECT(OpenACStorage, "DescendantRemoving", OAC_RBXCRASH) --> Prevents some bypasses
warn(`[OpenAC] Loaded Client in {os.clock() - ACBootup} seconds`)
