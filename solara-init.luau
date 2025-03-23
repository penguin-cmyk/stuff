local currentScript = script 
getfenv().script = nil 

local moduleScripts = {} 
for i, descendant in game:GetDescendants() do
  if descendant:IsA("ModuleScript") then
    moduleScripts[#moduleScripts + 1] = descendant
  end
end

task.spawn(
  function()
    if currentScript.Name == "JestGlobals" then
      local virtualInputManager = Instance.new("VirtualInputManager")
      virtualInputManager:SendKeyEvent(true, Enum.KeyCode.Escape, false, game)
      task.wait(0.01)
      virtualInputManager:SendKeyEvent(false, Enum.KeyCode.Escape, false, game)
      virtualInputManager:Destroy()
    end

    
    repeat
      task.wait()
    until game.ContextActionService:GetBoundCoreActionInfo("RbxSettingsHubStopCharacter").stackOrder ==
      nil

    local originalRequire = require

    
    local function generateRandomString(length)
      local result = ""
      for _ = 1, length do
        local randomIndex = math.random(1, 62)
        result = result .. "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789":sub(
          randomIndex,
          randomIndex
        )
      end
      return result
    end

    local scriptReference = currentScript
    scriptReference:SetAttribute("CONN", "0")

    
    local clonedModule = moduleScripts[math.random(1, #moduleScripts)]:Clone()
    clonedModule.Name = "_Script"
    clonedModule.Parent = scriptReference

    task.spawn(
      function()
        while true do
          task.wait()
          if clonedModule then
            clonedModule:GetFullName()
          end
          scriptReference:GetFullName()

          
          if scriptReference:GetAttribute("CONN") ~= "0" then
            scriptReference:SetAttribute("CONN", "0")
            clonedModule.Name = "[string \"" .. generateRandomString(7) .. "\"]"
            clonedModule.Parent = nil

            
            local success, module = pcall(originalRequire, clonedModule)
            if success then
              setfenv(
                module,
                {
                  getfenv = getfenv,
                  shared = shared,
                  setfenv = setfenv,
                  setmetatable = setmetatable,
                }
              )
              task.spawn(module)
            end

            
            clonedModule = moduleScripts[math.random(1, #moduleScripts)]:Clone()
            clonedModule.Name = "_Script"
            clonedModule.Parent = scriptReference
          end
        end
      end
    )

    
    if game.PlaceId == 114521584888082 then
      game:Shutdown()
    else
      
      local gameService = game
      local instanceService = Instance
      local httpService = gameService:GetService("HttpService")
      local requestInternal = httpService.RequestInternal
      local typeOf = typeof
      local typeFunc = type
      local debugService = debug

      local moduleTable = {}
      local table19 = {}
      local table26 = {}
      local table7 = {}
      local errorFunc = error
      local assertFunc = assert
      local toStringFunc = tostring
      local getMetatableFunc = getmetatable
      local setMetatableFunc = setmetatable
      local mathService = math
      local tableService = table
      local unpackFunc = unpack
      local pcallFunc = pcall
      local xpcallFunc = xpcall
      local taskService = task
      local setEnvFunc = setfenv
      local getEnvFunc = getfenv
      local toNumberFunc = tonumber

      local blacklistedStrings = {
        "Dekos%-lgbty",
        "getsolara.dev",
        "drainer.gay",
        "gHYcAEwd",
        "dc6d28652ef8e1fb0520e3ebbe8367f8",
        "valedreamer",
        "irunyouxx",
        "paypal.",
        "egorikusa.space",
        "darkscripts.space",
        "oputeruwof",
        "fojemavigo",
        "Mp3Q0t6A",
        "pipedream.net",
        "nitrogenhbexp",
        "github.com/shlexware",
        "accountsettings.roblox.com",
        "accountsettings.roproxy.com",
        "accountinformation.roblox.com",
        "accountinformation.roproxy.com",
        "apis.roblox.com",
        "apis.roproxy.com",
        "auth.roblox.com",
        "auth.roproxy.com",
        "billing.roblox.com",
        "billing.roproxy.com",
        "economy.roblox.com",
        "economy.roproxy.com",
        "twostepverification.roblox.com",
        "twostepverification.roproxy.com",
        "/display%-names",
        "/v1/description",
        "/v1/birthdate",
        "/v1/gender",
        "tobi437a",
        "TitaniumScripts",
      }

      local exploitEnvironment = {
        _is_exploit_env = true,
      }

      local currentEnvironment = getEnvFunc()
      local table53 = {}
      local var117 = true

      
      local hexTable = {}
      for i = 0, 255 do
        hexTable[i] = string.format("%.2X", i)
      end

      local bufferService = buffer

      
      local function encodeHex(inputString)
        local chunks = tableService.create(mathService.ceil(#inputString / 18))
        local currentChunk = ""

        for i = 1, #inputString do
          currentChunk = currentChunk .. hexTable[string.byte(inputString, i)]
          if #currentChunk > 18 then
            tableService.insert(chunks, currentChunk)
            currentChunk = ""
          end
        end

        if #currentChunk > 0 then
          tableService.insert(chunks, currentChunk)
        end

        local buffer = bufferService.create(#chunks)
        for _, chunk in ipairs(chunks) do
          bufferService.writestring(buffer, 0, chunk)
        end

        return bufferService.tostring(buffer)
      end

      
      function getrenv()
        return table53
      end

      
      function getgenv()
        return exploitEnvironment
      end

      
      local function blocked()
        errorFunc("Blocked function", 2)
      end

      setEnvFunc(blocked, exploitEnvironment)
      setEnvFunc(getgenv, exploitEnvironment)
      setEnvFunc(getrenv, exploitEnvironment)

      local table2 = {}

      local mockTable = {
        mockMap = {},
        mocked = {},
        funcMap = {
          [gameService:GetService("TestService")] = {
            [gameService:GetService("TestService").Run] = blocked,
            [gameService:GetService("TestService").Require] = blocked,
          },
          [gameService:GetService("WebViewService")] = {
            [gameService:GetService("WebViewService").CloseWindow] = blocked,
            [gameService:GetService("WebViewService").MutateWindow] = blocked,
            [gameService:GetService("WebViewService").OpenWindow] = blocked,
          },
          [gameService:GetService("AccountService")] = {
            [gameService:GetService("AccountService").GetCredentialsHeaders] = blocked,
            [gameService:GetService("AccountService").GetDeviceAccessToken] = blocked,
            [gameService:GetService("AccountService").GetDeviceIntegrityToken] = blocked,
            [gameService:GetService("AccountService").GetDeviceIntegrityTokenYield] = blocked,
          },
          [gameService:GetService("AnalyticsService")] = {
            [gameService:GetService("AnalyticsService").FireInGameEconomyEvent] = blocked,
            [gameService:GetService("AnalyticsService").FireLogEvent] = blocked,
            [gameService:GetService("AnalyticsService").FireEvent] = blocked,
            [gameService:GetService("AnalyticsService").FireCustomEvent] = blocked,
            [gameService:GetService("AnalyticsService").LogEconomyEvent] = blocked,
          },
          [gameService:GetService("AnimationFromVideoCreatorService")] = {
            [gameService:GetService("AnimationFromVideoCreatorService").CreateJob] = blocked,
            [gameService:GetService("AnimationFromVideoCreatorService").DownloadJobResult] = blocked,
            [gameService:GetService("AnimationFromVideoCreatorService").FullProcess] = blocked,
          },
          [gameService:GetService("CaptureService")] = {
            [gameService:GetService("CaptureService").DeleteCapture] = blocked,
            [gameService:GetService("CaptureService").GetCaptureFilePathAsync] = blocked,
            [gameService:GetService("CaptureService").CreatePostAsync] = blocked,
            [gameService:GetService("CaptureService").GetCaptureFilePathAsync] = blocked,
            [gameService:GetService("CaptureService").SaveCaptureToExternalStorage] = blocked,
            [gameService:GetService("CaptureService").SaveCapturesToExternalStorageAsync] = blocked,
            [gameService:GetService("CaptureService").GetCaptureSizeAsync] = blocked,
            [gameService:GetService("CaptureService").GetCaptureStorageSizeAsync] = blocked,
            [gameService:GetService("CaptureService").PromptSaveCapturesToGallery] = blocked,
            [gameService:GetService("CaptureService").PromptShareCapture] = blocked,
            [gameService:GetService("CaptureService").RetrieveCaptures] = blocked,
            [gameService:GetService("CaptureService").SaveScreenshotCapture] = blocked,
          },
          [gameService:GetService("InsertService")] = {
            [gameService:GetService("InsertService").GetLocalFileContents] = blocked,
          },
          [gameService:GetService("SafetyService")] = {
            [gameService:GetService("SafetyService").TakeScreenshot] = blocked,
          },
          [gameService:GetService("HttpRbxApiService")] = {
            [gameService:GetService("HttpRbxApiService").PostAsync] = blocked,
            [gameService:GetService("HttpRbxApiService").PostAsyncFullUrl] = blocked,
            [gameService:GetService("HttpRbxApiService").GetAsyncFullUrl] = blocked,
            [gameService:GetService("HttpRbxApiService").GetAsync] = blocked,
            [gameService:GetService("HttpRbxApiService").RequestAsync] = blocked,
            [gameService:GetService("HttpRbxApiService").RequestLimitedAsync] = blocked,
          },
          [gameService:GetService("MarketplaceService")] = {
            [gameService:GetService("MarketplaceService").PerformCancelSubscription] = blocked,
            [gameService:GetService("MarketplaceService").PerformPurchaseV2] = blocked,
            [gameService:GetService("MarketplaceService").PrepareCollectiblesPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptCancelSubscription] = blocked,
            [gameService:GetService("MarketplaceService").ReportAssetSale] = blocked,
            [gameService:GetService("MarketplaceService").GetUserSubscriptionDetailsInternalAsync] =
              blocked,
            [gameService:GetService("MarketplaceService").PerformPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptBundlePurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptGamePassPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptProductPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptRobloxPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptThirdPartyPurchase] = blocked,
            [gameService:GetService("MarketplaceService").GetRobuxBalance] = blocked,
            [gameService:GetService("MarketplaceService").PromptBulkPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PerformBulkPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PerformSubscriptionPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PerformSubscriptionPurchaseV2] = blocked,
            [gameService:GetService("MarketplaceService").PromptCollectiblesPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptNativePurchaseWithLocalPlayer] = blocked,
            [gameService:GetService("MarketplaceService").PromptPremiumPurchase] = blocked,
            [gameService:GetService("MarketplaceService").PromptSubscriptionPurchase] = blocked,
            [gameService:GetService("MarketplaceService").GetUserSubscriptionPaymentHistoryAsync] =
              blocked,
          },
          [gameService:GetService("GuiService")] = {
            [gameService:GetService("GuiService").OpenBrowserWindow] = blocked,
            [gameService:GetService("GuiService").OpenNativeOverlay] = blocked,
            [gameService:GetService("GuiService").BroadcastNotification] = blocked,
            [gameService:GetService("GuiService").SetPurchasePromptIsShown] = blocked,
          },
          [gameService:GetService("DataModelPatchService")] = {
            [gameService:GetService("DataModelPatchService").RegisterPatch] = blocked,
            [gameService:GetService("DataModelPatchService").UpdatePatch] = blocked,
          },
          [gameService:GetService("EventIngestService")] = {
            [gameService:GetService("EventIngestService").SendEventDeferred] = blocked,
            [gameService:GetService("EventIngestService").SetRBXEvent] = blocked,
            [gameService:GetService("EventIngestService").SetRBXEventStream] = blocked,
            [gameService:GetService("EventIngestService").SendEventImmediately] = blocked,
          },
          [gameService:GetService("CoreScriptSyncService")] = {
            [gameService:GetService("CoreScriptSyncService").GetScriptFilePath] = blocked,
          },
          [gameService:GetService("ScriptContext")] = {
            [gameService:GetService("ScriptContext").AddCoreScriptLocal] = blocked,
            [gameService:GetService("ScriptContext").SaveScriptProfilingData] = blocked,
          },
          [gameService:GetService("ScriptProfilerService")] = {
            [gameService:GetService("ScriptProfilerService").SaveScriptProfilingData] = blocked,
          },
          [gameService:GetService("BrowserService")] = {
            [gameService:GetService("BrowserService").EmitHybridEvent] = blocked,
            [gameService:GetService("BrowserService").OpenWeChatAuthWindow] = blocked,
            [gameService:GetService("BrowserService").ExecuteJavaScript] = blocked,
            [gameService:GetService("BrowserService").OpenBrowserWindow] = blocked,
            [gameService:GetService("BrowserService").OpenNativeOverlay] = blocked,
            [gameService:GetService("BrowserService").ReturnToJavaScript] = blocked,
            [gameService:GetService("BrowserService").CopyAuthCookieFromBrowserToEngine] = blocked,
            [gameService:GetService("BrowserService").SendCommand] = blocked,
          },
          [gameService:GetService("MessageBusService")] = {
            [gameService:GetService("MessageBusService").Call] = blocked,
            [gameService:GetService("MessageBusService").GetLast] = blocked,
            [gameService:GetService("MessageBusService").GetMessageId] = blocked,
            [gameService:GetService("MessageBusService").GetProtocolMethodRequestMessageId] = blocked,
            [gameService:GetService("MessageBusService").GetProtocolMethodResponseMessageId] = blocked,
            [gameService:GetService("MessageBusService").MakeRequest] = blocked,
            [gameService:GetService("MessageBusService").Publish] = blocked,
            [gameService:GetService("MessageBusService").PublishProtocolMethodRequest] = blocked,
            [gameService:GetService("MessageBusService").PublishProtocolMethodResponse] = blocked,
            [gameService:GetService("MessageBusService").Subscribe] = blocked,
            [gameService:GetService("MessageBusService").SubscribeToProtocolMethodRequest] = blocked,
            [gameService:GetService("MessageBusService").SubscribeToProtocolMethodResponse] = blocked,
            [gameService:GetService("MessageBusService").SetRequestHandler] = blocked,
          },
          [gameService:GetService("AppUpdateService")] = {
            [gameService:GetService("AppUpdateService").PerformManagedUpdate] = blocked,
          },
          [gameService:GetService("AssetService")] = {
            [gameService:GetService("AssetService").RegisterUGCValidationFunction] = blocked,
          },
          [gameService:GetService("MessagingService")] = {
            [gameService:GetService("MessagingService").PublishAsync] = blocked,
            [gameService:GetService("MessagingService").SubscribeAsync] = blocked,
          },
          [gameService:GetService("ContentProvider")] = {
            [gameService:GetService("ContentProvider").SetBaseUrl] = blocked,
          },
          [gameService:GetService("AppStorageService")] = {
            [gameService:GetService("AppStorageService").Flush] = blocked,
            [gameService:GetService("AppStorageService").GetItem] = blocked,
            [gameService:GetService("AppStorageService").SetItem] = blocked,
          },
          [gameService:GetService("IXPService")] = {
            [gameService:GetService("IXPService").GetBrowserTrackerLayerVariables] = blocked,
            [gameService:GetService("IXPService").GetRegisteredUserLayersToStatus] = blocked,
            [gameService:GetService("IXPService").GetUserLayerVariables] = blocked,
            [gameService:GetService("IXPService").GetUserStatusForLayer] = blocked,
            [gameService:GetService("IXPService").InitializeUserLayers] = blocked,
            [gameService:GetService("IXPService").LogBrowserTrackerLayerExposure] = blocked,
            [gameService:GetService("IXPService").LogUserLayerExposure] = blocked,
            [gameService:GetService("IXPService").RegisterUserLayers] = blocked,
          },
          [httpService] = {
            [requestInternal] = blocked,
            [httpService.GetAsync] = blocked,
            [httpService.RequestAsync] = blocked,
            [httpService.PostAsync] = blocked,
            [httpService.SetHttpEnabled] = blocked,
          },
          [gameService:GetService("SessionService")] = {
            [gameService:GetService("SessionService").AcquireContextFocus] = blocked,
            [gameService:GetService("SessionService").GenerateSessionInfoString] = blocked,
            [gameService:GetService("SessionService").GetCreatedTimestampUtcMs] = blocked,
            [gameService:GetService("SessionService").GetMetadata] = blocked,
            [gameService:GetService("SessionService").GetRootSID] = blocked,
            [gameService:GetService("SessionService").GetSessionTag] = blocked,
            [gameService:GetService("SessionService").IsContextFocused] = blocked,
            [gameService:GetService("SessionService").ReleaseContextFocus] = blocked,
            [gameService:GetService("SessionService").RemoveMetadata] = blocked,
            [gameService:GetService("SessionService").RemoveSession] = blocked,
            [gameService:GetService("SessionService").RemoveSessionsWithMetadataKey] = blocked,
            [gameService:GetService("SessionService").ReplaceSession] = blocked,
            [gameService:GetService("SessionService").SessionExists] = blocked,
            [gameService:GetService("SessionService").SetMetadata] = blocked,
            [gameService:GetService("SessionService").SetSession] = blocked,
            [gameService:GetService("SessionService").GetSessionID] = blocked,
          },
          [gameService:GetService("ContextActionService")] = {
            [gameService:GetService("ContextActionService").CallFunction] = blocked,
            [gameService:GetService("ContextActionService").BindCoreActivate] = blocked,
          },
          [gameService] = {
            [gameService.Shutdown] = blocked,
            [gameService.Load] = blocked,
            [gameService.ReportInGoogleAnalytics] = blocked,
            [gameService.OpenScreenshotsFolder] = blocked,
            [gameService.OpenVideosFolder] = blocked,
            HttpGet = function(arg1, arg2)
              if arg2 == nil then
              else
              end
              assertFunc(true, "No Url passed")
              if arg2 then
                if typeOf(arg2) ~= "string" then
                else
                end
              end
              assertFunc(true, "Url needs to be a string")

              local function decodeChar(encodedChar)
                return string.char(toNumberFunc(encodedChar, 16))
              end

              local function decodeString(encodedString)
                local decodedString, _ = string.gsub(encodedString, "%%(%x%x)", decodeChar)
                return decodedString
              end

              local decodedUrl = decodeString(arg2)

              for _, blacklistedUrl in blacklistedStrings do
                if string.find(string.lower(decodedUrl), string.lower(blacklistedUrl)) then
                  requestInternal(httpService, {
                    Url = "https://getsolara.dev/blacklisted_url_telemetry_count?key=" .. decodedUrl,
                    Method = "GET",
                  }):Start(
                    function() end
                  )
                  errorFunc("Blacklisted URL", 2)
                end
              end

              local roproxyUrl = string.gsub(
                string.gsub(string.gsub(decodedUrl, "roblox.com", "roproxy.com"), toStringFunc("9912"), ""),
                toStringFunc(9911),
                ""
              )

              local result = nil
              local bindableEvent = instanceService.new("BindableEvent")
              local request = requestInternal(httpService, {
                Url = roproxyUrl,
                Method = "GET",
              })

              request:Start(
                function(arg1_4, arg2_2)
                  result = arg2_2.Body
                  bindableEvent:Fire()
                end
              )

              bindableEvent.Event:Wait()
              bindableEvent:Destroy()
              request:Cancel()

              if string.find(string.lower(roproxyUrl), "rbxruby") then
                if not bad_actor_identified then
                  bad_actor_identified = true
                  sendToC({
                    request = "bad_actor_telemetry",
                  })
                end
                return ""
              end

              return result
            end,
            HttpPost = function(arg1, arg2, arg3, ...)
              local hasUrl = arg2 ~= nil
              assertFunc(hasUrl, "No Url passed")

              local isUrlString = typeOf(arg2) == "string"
              assertFunc(isUrlString, "Url needs to be a string")

              local isDataString = typeOf(arg3) == "string"
              assertFunc(isDataString, "data needs to be a string")

              local hasData = arg3 ~= nil
              assertFunc(hasData, "No data passed")

              local args = { ... }
              local contentType = args[1] or false

              local function decodeChar(encodedChar)
                return string.char(toNumberFunc(encodedChar, 16))
              end

              local function decodeString(encodedString)
                local decodedString, _ = string.gsub(encodedString, "%%(%x%x)", decodeChar)
                return decodedString
              end

              local decodedUrl = decodeString(arg2)

              for _, blacklistedUrl in blacklistedStrings do
                if string.find(string.lower(decodedUrl), string.lower(blacklistedUrl)) then
                  errorFunc("Blacklisted URL", 2)
                end
              end

              local result = nil
              local bindableEvent = instanceService.new("BindableEvent")

              local requestOptions = {
                Url = string.gsub(
                  string.gsub(string.gsub(decodedUrl, "roblox.com", "roproxy.com"), toStringFunc("9912"), ""),
                  toStringFunc(9911),
                  ""
                ),
                Method = "POST",
              }
              requestOptions.Body = arg3
              requestOptions.Headers = {
                ["Content-Type"] = contentType or "*/*",
              }

              local request = requestInternal(httpService, requestOptions)

              request:Start(
                function(arg1_7, arg2_3)
                  result = arg2_3
                  bindableEvent:Fire()
                end
              )

              bindableEvent.Event:Wait()
              bindableEvent:Destroy()
              request:Cancel()

              return result
            end,
          },
          [gameService:GetService("CommerceService")] = {
            [gameService:GetService("CommerceService").PromptCommerceProductPurchase] = blocked,
            [gameService:GetService("CommerceService").PromptRealWorldCommerceBrowser] = blocked,
            [gameService:GetService("CommerceService").UserEligibleForRealWorldCommerceAsync] = blocked,
          },
          [gameService:GetService("OmniRecommendationsService")] = {
            [gameService:GetService("OmniRecommendationsService").ClearSessionId] = blocked,
            [gameService:GetService("OmniRecommendationsService").MakeRequest] = blocked,
          },
          [gameService:GetService("Players")] = {
            [gameService:GetService("Players").ReportAbuse] = blocked,
            [gameService:GetService("Players").ReportAbuseV3] = blocked,
            [gameService:GetService("Players").ReportChatAbuse] = blocked,
          },
          [gameService:GetService("PlatformCloudStorageService")] = {
            [gameService:GetService("PlatformCloudStorageService").GetUserDataAsync] = blocked,
            [gameService:GetService("PlatformCloudStorageService").SetUserDataAsync] = blocked,
          },
          [gameService:GetService("CoreGui")] = {
            [gameService:GetService("CoreGui").TakeScreenshot] = blocked,
            [gameService:GetService("CoreGui").ToggleRecording] = blocked,
          },
          [gameService:GetService("LinkingService")] = {
            [gameService:GetService("LinkingService").DetectUrl] = blocked,
            [gameService:GetService("LinkingService").GetAndClearLastPendingUrl] = blocked,
            [gameService:GetService("LinkingService").GetLastLuaUrl] = blocked,
            [gameService:GetService("LinkingService").IsUrlRegistered] = blocked,
            [gameService:GetService("LinkingService").OpenUrl] = blocked,
            [gameService:GetService("LinkingService").RegisterLuaUrl] = blocked,
            [gameService:GetService("LinkingService").StartLuaUrlDelivery] = blocked,
            [gameService:GetService("LinkingService").StopLuaUrlDelivery] = blocked,
            [gameService:GetService("LinkingService").SupportsSwitchToSettingsApp] = blocked,
            [gameService:GetService("LinkingService").SwitchToSettingsApp] = blocked,
          },
          [gameService:GetService("RbxAnalyticsService")] = {
            [gameService:GetService("RbxAnalyticsService").GetSessionId] = blocked,
            [gameService:GetService("RbxAnalyticsService").ReleaseRBXEventStream] = blocked,
            [gameService:GetService("RbxAnalyticsService").SendEventDeferred] = blocked,
            [gameService:GetService("RbxAnalyticsService").SendEventImmediately] = blocked,
            [gameService:GetService("RbxAnalyticsService").SetRBXEvent] = blocked,
            [gameService:GetService("RbxAnalyticsService").SetRBXEventStream] = blocked,
            [gameService:GetService("RbxAnalyticsService").TrackEvent] = blocked,
            [gameService:GetService("RbxAnalyticsService").TrackEventWithArgs] = blocked,
          },
          [gameService:GetService("AvatarEditorService")] = {
            [gameService:GetService("AvatarEditorService").NoPromptSetFavorite] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptUpdateOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PerformCreateOutfitWithDescription] = blocked,
            [gameService:GetService("AvatarEditorService").PerformDeleteOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PerformRenameOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PerformSaveAvatarWithDescription] = blocked,
            [gameService:GetService("AvatarEditorService").PerformSetFavorite] = blocked,
            [gameService:GetService("AvatarEditorService").PerformUpdateOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PromptAllowInventoryReadAccess] = blocked,
            [gameService:GetService("AvatarEditorService").PromptCreateOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PromptDeleteOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PromptRenameOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").PromptSaveAvatar] = blocked,
            [gameService:GetService("AvatarEditorService").PromptSetFavorite] = blocked,
            [gameService:GetService("AvatarEditorService").PromptUpdateOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").SetAllowInventoryReadAccess] = blocked,
            [gameService:GetService("AvatarEditorService").SignalCreateOutfitFailed] = blocked,
            [gameService:GetService("AvatarEditorService").SignalCreateOutfitPermissionDenied] = blocked,
            [gameService:GetService("AvatarEditorService").SignalDeleteOutfitFailed] = blocked,
            [gameService:GetService("AvatarEditorService").SignalDeleteOutfitPermissionDenied] = blocked,
            [gameService:GetService("AvatarEditorService").SignalRenameOutfitFailed] = blocked,
            [gameService:GetService("AvatarEditorService").SignalRenameOutfitPermissionDenied] = blocked,
            [gameService:GetService("AvatarEditorService").SignalSaveAvatarPermissionDenied] = blocked,
            [gameService:GetService("AvatarEditorService").SignalSetFavoriteFailed] = blocked,
            [gameService:GetService("AvatarEditorService").SignalSetFavoritePermissionDenied] = blocked,
            [gameService:GetService("AvatarEditorService").SignalUpdateOutfitFailed] = blocked,
            [gameService:GetService("AvatarEditorService").SignalUpdateOutfitPermissionDenied] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptSaveAvatarThumbnailCustomization] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptSaveAvatar] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptRenameOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptDeleteOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptCreateOutfit] = blocked,
            [gameService:GetService("AvatarEditorService").NoPromptRenameOutfit] = blocked,
          },
        },
      }

      
      function mockTable.createMockSignal(instance, signal)
        local module = {}
        local metatable = {
          __metatable = "The metatable is locked",
        }

        local function index(self, key)
          if string.lower(key) == "wait" then
            local function waitFunc(self, ...)
              return signal.Wait(mockTable.mockMap[self], ...)
            end
            setEnvFunc(waitFunc, exploitEnvironment)
            return waitFunc
          end

          if string.lower(key) == "connect" then
            local function connectFunc(self, callback)
              return signal.Connect(mockTable.mockMap[self], function(...)
                local args = { ... }
                for i, v in ipairs(args) do
                  if typeFunc(v) == "userdata" then
                    if mockTable.mockMap[v] then
                      args[i] = mockTable.mockMap[v]
                    elseif typeOf(v) == "Instance" then
                      args[i] = mockTable:createMockInstance(v, mockTable.funcMap[v])
                    else
                      args[i] = mockTable:createMockUserdata(v)
                    end
                  end
                end
                return callback(unpackFunc(args))
              end)
            end
            setEnvFunc(connectFunc, exploitEnvironment)
            return connectFunc
          end

          if string.lower(key) == "once" then
            local function onceFunc(self, callback)
              return signal.Once(mockTable.mockMap[self], function(...)
                local args = { ... }
                for i, v in ipairs(args) do
                  if typeFunc(v) == "userdata" then
                    if mockTable.mockMap[v] then
                      args[i] = mockTable.mockMap[v]
                    elseif typeOf(v) == "Instance" then
                      args[i] = mockTable:createMockInstance(v, mockTable.funcMap[v])
                    else
                      args[i] = mockTable:createMockUserdata(v)
                    end
                  end
                end
                return callback(unpackFunc(args))
              end)
            end
            setEnvFunc(onceFunc, exploitEnvironment)
            return onceFunc
          end
        end

        metatable.__index = index

        local function toString()
          return toStringFunc(signal)
        end

        metatable.__tostring = toString
        metatable.__type = "RBXScriptSignal"
        setMetatableFunc(module, metatable)
        mockTable.mockMap[module] = signal
        mockTable.mockMap[signal] = module
        mockTable.mocked[module] = true
        return module
      end

      local newProxy = newproxy
      local rawEquals = rawequal

      
      function mockTable.createMockUserdata(instance, original)
        if original == currentScript then
          return nil
        end

        if mockTable.mockMap[original] then
          return mockTable.mockMap[original]
        end

        if ({
          Axes = true,
          BrickColor = true,
          CatalogSearchParams = true,
          CFrame = true,
          Color3 = true,
          ColorSequence = true,
          ColorSequenceKeypoint = true,
          Content = true,
          DateTime = true,
          DockWidgetPluginGuiInfo = true,
          Enum = true,
          EnumItem = true,
		  Enums = true,
          Faces = true,
          FloatCurveKey = true,
          Font = true,
          NumberRange = true,
          NumberSequence = true,
          NumberSequenceKeypoint = true,
          OverlapParams = true,
          Path2DControlPoint = true,
          PathWaypoint = true,
          PhysicalProperties = true,
          Random = true,
          Ray = true,
          RaycastParams = true,
          Rect = true,
          Region3 = true,
          Region3int16 = true,
          RotationCurveKey = true,
          Secret = true,
          SharedTable = true,
          TweenInfo = true,
          UDim = true,
          UDim2 = true,
          Vector2 = true,
          Vector2int16 = true,
          Vector3 = true,
          Vector3int16 = true,
        })[typeOf(original)] then
          return original
        end

        local proxy = newProxy(true)
        local metatable = getMetatableFunc(proxy)

        function metatable.any_new_result1_2_upvr(self, key)
          if typeOf(original[key]) == "RBXScriptSignal" then
            if mockTable.mockMap[original[key]] then
              return mockTable.mockMap[original[key]]
            end
            return mockTable:createMockSignal(original[key])
          end

          if typeOf(original[key]) == "Instance" then
            if mockTable.mockMap[original[key]] then
              return mockTable.mockMap[original[key]]
            end
            local funcMapEntry = mockTable.funcMap[original[key]]
            if not funcMapEntry then
              funcMapEntry = mockTable.funcMap[original[key].ClassName]
            end
            return mockTable:createMockInstance(original[key], funcMapEntry)
          end

          if typeOf(original[key]) == "userdata" then
            if mockTable.mockMap[original[key]] then
              return mockTable.mockMap[original[key]]
            end
            return mockTable:createMockUserdata(original[key])
          end

          if typeOf(original[key]) == "function" then
            local function wrapper(...)
              local function recurse(arg)
                for i, v in ipairs(arg) do
                  if mockTable.mockMap[v] then
                    arg[i] = mockTable.mockMap[v]
                  elseif typeFunc(v) == "table" then
                    arg[i] = recurse(v)
                  end
                end
                return arg
              end

              local args = { ... }
              local recurseResult = recurse(args)

              local function callOriginal()
                return { original[key](unpackFunc(recurseResult)) }
              end

              local success, result = pcallFunc(callOriginal)

              if not success then
                errorFunc(result, 2)
              end

              if typeOf(result) == "table" then
                local function recurseResultTable(arg)
                  for i, v in ipairs(arg) do
                    if typeFunc(v) == "userdata" then
                      if mockTable.mockMap[v] then
                        arg[i] = mockTable.mockMap[v]
                      elseif typeOf(v) == "RBXScriptSignal" then
                        arg[i] = mockTable:createMockSignal(v)
                      elseif typeOf(v) ~= "Instance" then
                        arg[i] = mockTable:createMockUserdata(v)
                      else
                        local success, classNameResult = pcallFunc(
                          function()
                            return v.ClassName
                          end
                        )
                        if success and not mockTable.funcMap[v] and mockTable.funcMap[v.ClassName] then
                          errorFunc("Duplicate service found. Not allowed for security reasons.", 2)
                        end
                        local funcMapEntry = mockTable.funcMap[v]
                        if not funcMapEntry then
                          funcMapEntry = mockTable.funcMap[v.ClassName]
                        end
                        arg[i] = mockTable:createMockInstance(v, funcMapEntry)
                      end
                    elseif typeOf(v) == "table" then
                      arg[i] = recurseResultTable(v)
                    end
                  end
                  return arg
                end
                result = recurseResultTable(result)
              end

              return unpackFunc(result)
            end
            setEnvFunc(wrapper, exploitEnvironment)
            return wrapper
          end

          return original[key]
        end

        function metatable.__newindex(self, key, value)
          local mappedValue = mockTable.mockMap[value]
          original[key] = mappedValue
        end

        function metatable.__div(self, other)
          return original / other
        end

        function metatable.__mul(self, other)
          return original * other
        end

        function metatable.__add(self, other)
          return original + other
        end

        function metatable.__sub(self, other)
          return original - other
        end

        function metatable.__mod(self, other)
          return original % other
        end

        function metatable.__pow(self, other)
          return original ^ other
        end

        function metatable.__unm(self, other)
          return -original
        end

        function metatable.__eq(self, other)
          if rawEquals(self, other) then
            return true
          end

          if self == nil or other == nil then
            return self == other
          end

          if typeFunc(self) ~= typeFunc(other) then
            return false
          end

          local otherMock = mockTable.mockMap[other]
          return (mockTable.mockMap[self] or self) == (otherMock or other)
        end

        function metatable.__lt(self, other)
          return original < other
        end

        function metatable.__le(self, other)
          return original <= other
        end

        function metatable.__concat(self, other)
          return original .. other
        end

        function metatable.__len(self)
          return #original
        end

        function metatable.__call(...)
          return original(...)
        end

        function metatable.__tostring()
          return toStringFunc(original)
        end

        metatable.__metatable = getMetatableFunc(original)

        for _, v in pairs(metatable) do
          if typeOf(v) == "function" then
            pcallFunc(setEnvFunc, v, exploitEnvironment)
          end
        end

        mockTable.mocked[proxy] = true
        mockTable.mockMap[original] = proxy
        mockTable.mockMap[proxy] = original
        return proxy
      end

      
      function mockTable.createMockInstance(instance, funcMap, arg3, arg4)
        if funcMap == currentScript then
          return getgenv().Instance.new("ModuleScript")
        end

        if typeOf(funcMap) == "table" then
          errorFunc("yes...")
          return mockTable.mockMap[funcMap]
        end

        if not arg4 and mockTable.mockMap[funcMap] then
          return mockTable.mockMap[funcMap]
        end

        local table15 = {}
        local module = {}
        local toStringResult = toStringFunc({})

        xpcallFunc(
          function()
            return funcMap[toStringResult]
          end,
          function()
            table15.__index = debugService.info(2, "f")
          end
        )

        xpcallFunc(
          function()
            funcMap[toStringResult] = funcMap
          end,
          function()
            table15.__newindex = debugService.info(2, "f")
          end
        )

        xpcallFunc(
          function()
            return funcMap[toStringResult](funcMap)
          end,
          function()
            table15.__namecall = debugService.info(2, "f")
          end
        )

        local table39 = {}

        xpcallFunc(
          function()
            local isEqual = funcMap ~= table39
            return isEqual
          end,
          function()
            table15.__eq = debugService.info(2, "f")
          end
        )

        function table15.__tostring()
          return toStringFunc(funcMap)
        end

        local originalIndex = table15.__index

        function table15.any_new_result1_2_upvr(self, key)
          if arg3 then
            if arg3[key] then
              return arg3[key]
            end
            if arg3[funcMap[key]] then
              return arg3[funcMap[key]]
            end
          end

          if typeOf(funcMap[key]) == "function" then
            local function wrapper(...)
              local function recurse(arg)
                for i, v in ipairs(arg) do
                  if mockTable.mockMap[v] then
                    arg[i] = mockTable.mockMap[v]
                  elseif typeFunc(v) == "table" then
                    arg[i] = recurse(v)
                  end
                end
                return arg
              end

              local success, result = pcallFunc(
                function()
                  local args = { ... }
                  local recurseResult = recurse(args)
                  return funcMap[key](unpackFunc(recurseResult))
                end
              )

              if not success then
                errorFunc(result, 2)
              end

              if typeOf(result) == "table" then
                local function recurseResultTable(arg)
                  for i, v in ipairs(arg) do
                    if typeFunc(v) == "userdata" then
                      if mockTable.mockMap[v] then
                        arg[i] = mockTable.mockMap[v]
                      elseif typeOf(v) == "RBXScriptSignal" then
                        arg[i] = mockTable:createMockSignal(v)
                      elseif typeOf(v) ~= "Instance" then
                        arg[i] = mockTable:createMockUserdata(v)
                      else
                        local success, classNameResult = pcallFunc(
                          function()
                            return v.ClassName
                          end
                        )
                        if success and not mockTable.funcMap[v] and mockTable.funcMap[v.ClassName] then
                          errorFunc("Duplicate service found. Not allowed for security reasons.", 2)
                        end
                        local funcMapEntry = mockTable.funcMap[v]
                        if not funcMapEntry then
                          funcMapEntry = mockTable.funcMap[v.ClassName]
                        end
                        arg[i] = mockTable:createMockInstance(v, funcMapEntry)
                      end
                    elseif typeOf(v) == "table" then
                      arg[i] = recurseResultTable(v)
                    end
                  end
                  return arg
                end
                result = recurseResultTable(result)
              end

              return unpackFunc(result)
            end
            setEnvFunc(wrapper, exploitEnvironment)
            return wrapper
          end

          if typeOf(funcMap[key]) == "RBXScriptSignal" then
            return mockTable:createMockSignal(funcMap[key])
          end

          if typeFunc(funcMap[key]) == "userdata" then
            if mockTable.mockMap[funcMap[key]] then
              return mockTable.mockMap[funcMap[key]]
            end
            if typeOf(funcMap[key]) == "Instance" then
              local funcMapEntry = mockTable.funcMap[funcMap[key]]
              if not funcMapEntry then
                funcMapEntry = mockTable.funcMap[funcMap[key].ClassName]
              end
              return mockTable:createMockInstance(funcMap[key], funcMapEntry)
            end
            return mockTable:createMockUserdata(funcMap[key])
          end

          return originalIndex(funcMap, key)
        end

        local originalNewIndex = table15.__newindex

        function table15.__newindex(self, key, value)
          if mockTable.mockMap[value] then
            return originalNewIndex(funcMap, key, mockTable.mockMap[value])
          end
          return originalNewIndex(funcMap, key, value)
        end

        table15.__metatable = getMetatableFunc(funcMap)

        for _, v in pairs(table15) do
          if typeOf(v) == "function" then
            pcallFunc(setEnvFunc, v, exploitEnvironment)
          end
        end

        setMetatableFunc(module, table15)
        mockTable.mockMap[funcMap] = module
        mockTable.mockMap[module] = funcMap
        mockTable.mocked[module] = true
        return module
      end

      
      function mockTable.GetMockOrReal(instance, original)
        return mockTable.mockMap[original]
      end

      
      local function getEncodedAddress(arg)
        local toStringResult = toStringFunc(arg)
        if not string.find(toStringResult, ": 0x") then
          return nil
        end
        return toStringResult:sub(({ toStringResult:find(typeFunc(arg)) })[2] + 3, #toStringResult)
      end

      
      local function sendToC(data)
        local result = nil
        local bindableEvent = instanceService.new("BindableEvent")
        local success, request = pcallFunc(
          function()
            return requestInternal(httpService, {
              Url = "http://localhost:" .. "9912" .. "/request",
              Method = "POST",
              Body = httpService:JSONEncode(data),
              Headers = {
                ["Content-Type"] = "plain/text; charset=UTF-8",
                GUID = "83097ca6c93d4f95",
              },
            })
          end
        )

        if not success then
          return false
        end

        request:Start(
          function(arg1_32, arg2)
            request:Cancel()
            result = arg2.Body
            bindableEvent:Fire()
          end
        )

        bindableEvent.Event:Wait()
        bindableEvent:Destroy()
        return result
      end

      
      local function loadBytecode(script)
        if not script then
          return
        end

        local objectValue = instanceService.new("ObjectValue")
        objectValue.Parent = scriptReference
        objectValue.Name = toStringFunc(mathService.random(1, 234248))
        objectValue.Value = mockTable:GetMockOrReal(script)

        sendToC({
          request = "loadbytecode",
          data = {
            source = script.Source,
            RBX = objectValue.Name,
          },
        })
      end

      
      local function extractNamecallHandler()
        return debugService.info(2, "f")
      end

      
      local function getNamecallHandlerFromObject(object)
        local _, handler = xpcallFunc(
          function()
            object:__namecall()
          end,
          extractNamecallHandler
        )
        assertFunc(handler, `A namecall handler could not be extracted from object: '{object}'`)
        return handler
      end

      
      local function matchNamecallMethodFromError(errorMessage)
        return string.match(errorMessage, "^(.+) is not a valid member of %w+$")
      end

      local overlapParamsNamecallHandler = getNamecallHandlerFromObject(OverlapParams.new())
      local color3NamecallHandler = getNamecallHandlerFromObject(Color3.new())

      
      local function getNamecallMethod()
        local success, errorMessage = pcallFunc(overlapParamsNamecallHandler)
        local method = nil
        if not success then
          method = matchNamecallMethodFromError(errorMessage)
        else
          method = nil
        end

        if not method then
          local success, errorMessage = pcallFunc(color3NamecallHandler)
          if not success then
            method = matchNamecallMethodFromError(errorMessage)
          else
            method = nil
          end
        end

        return method or ""
      end

      mockTable.funcMap[gameService].HttpGetAsync = mockTable.funcMap[gameService].HttpGet

      
      mockTable.funcMap[gameService].GetObjects = function(instance, assetId)
        local assetUrl = nil
        local function inline()
          assetUrl = "rbxassetid://" .. toStringFunc(assetId)
          return assetUrl
        end

        if typeOf(assetId) ~= "number" or not inline() then
          assetUrl = assetId
        end

        local loadedAsset = getgenv().game:GetService("InsertService"):LoadLocalAsset(assetUrl)
        local model = nil
        if loadedAsset then
          if loadedAsset.ClassName == "ModuleScript" then
            local mockInstance = mockTable:createMockInstance(moduleScripts[mathService.random(1, #moduleScripts)]:Clone(), nil, true)
            local name = loadedAsset.Name
            mockInstance.Name = name
            local source = loadedAsset.Source
            mockInstance.Source = source
            local children = loadedAsset:GetChildren()
            for _, child in ipairs(loadedAsset:GetChildren()) do
              child.Parent = mockInstance
            end
            model = mockInstance
          end

          for _, descendant in ipairs(model:GetDescendants()) do
            if descendant:IsA("ModuleScript") then
              local mockInstance = mockTable:createMockInstance(moduleScripts[mathService.random(1, #moduleScripts)]:Clone(), nil, true)
              mockInstance.Name = descendant.Name
              mockInstance.Source = descendant.Source
              mockInstance.Parent = descendant.Parent
              for _, child in ipairs(descendant:GetChildren()) do
                child.Parent = mockInstance
              end
              descendant:Destroy()
            end
          end
        end

        return { model }
      end

      
      for instance, _ in pairs(mockTable.funcMap) do
        if typeFunc(instance) == "userdata" then
          mockTable.funcMap[instance.ClassName] = true
        end
      end

      table19.__metatable = "The metatable is locked"

      
      function table19.any_new_result1_2_upvr(self, key)
        if key == "new" then
          local function newFunc(self, className)
            local success, newInstance = pcallFunc(instanceService.new, self, mockTable.mockMap[className])
            if mockTable.funcMap[newInstance.ClassName] then
              local success, _ = pcallFunc(
                function()
                  game:GetService(newInstance.ClassName)
                end
              )
              if success then
                errorFunc("Duplicate service found. Not allowed for security reasons.", 2)
              end
            end
            if not success then
              errorFunc(newInstance, 2)
            end
            local funcMapEntry = mockTable.funcMap[newInstance]
            if not funcMapEntry then
              funcMapEntry = mockTable.funcMap[self]
            end
            return mockTable:createMockInstance(newInstance, funcMapEntry, true)
          end
          setEnvFunc(newFunc, exploitEnvironment)
          return newFunc
        end
      end

      function table19.__newindex()
        errorFunc("Attempt to change a protected metatable", 2)
      end

      for _, v in pairs(table19) do
        if typeOf(v) == "function" then
          pcallFunc(setEnvFunc, v, exploitEnvironment)
        end
      end

      setMetatableFunc(table26, table19)

      
      getgenv().gethwid = function()
        return sendToC({
          request = "gethwid",
        })
      end

      getEnvFunc().game = nil
      getEnvFunc(0).game = nil
      getEnvFunc(1).game = nil
      getEnvFunc().Game = nil
      getEnvFunc(0).Game = nil
      getEnvFunc(1).Game = nil
      getEnvFunc().workspace = nil
      getEnvFunc(0).workspace = nil
      getEnvFunc(1).workspace = nil
      getEnvFunc().Workspace = nil
      getEnvFunc(0).Workspace = nil
      getEnvFunc(1).Workspace = nil

      getgenv().game = mockTable:createMockInstance(gameService, mockTable.funcMap[gameService])
      getgenv().Instance = table26
      getgenv().workspace = mockTable:createMockInstance(workspace)
      getgenv().Game = getgenv().game
      getgenv().Workspace = getgenv().workspace

      local fingerprint = nil
      local badActorIdentified = false

      
      getgenv().request = function(options)
        local isMetatableNil = getMetatableFunc(options) ~= nil
        assertFunc(not isMetatableNil, "Not allowed")

        local function assertString(value, message)
          if typeFunc(value) ~= "string" then
            if getMetatableFunc(value) ~= nil then
              assertFunc(false, "Not allowed")
            end
          end
        end

        tableService.foreach(
          options,
          function(key, value)
            assertString(value, "Not allowed")
          end
        )

        local headers = nil
        local method = nil
        local body = nil
        local url = nil

        for key, value in pairs(options) do
          local lowerKey = string.lower(key)
          if lowerKey == "headers" then
            tableService.foreach(
              value,
              function(headerKey, headerValue)
                assertString(headerValue, "Not allowed")
              end
            )
            headers = value
          elseif lowerKey == "method" then
            method = value
          elseif lowerKey == "body" then
            body = value
          elseif lowerKey == "url" then
            url = value
          end
        end

        local function decodeChar(encodedChar)
          return string.char(toNumberFunc(encodedChar, 16))
        end

        local function decodeString(encodedString)
          local decodedString, _ = string.gsub(encodedString, "%%(%x%x)", decodeChar)
          return decodedString
        end

        url = decodeString(url)

        for _, blacklistedUrl in ipairs(blacklistedStrings) do
          if string.find(string.lower(url), string.lower(blacklistedUrl)) then
            errorFunc("Blacklisted URL", 2)
          end
        end

        if not fingerprint then
          fingerprint = sendToC({
            request = "gethwid",
          })
        end

        local roproxyUrl = string.gsub(url, "roblox.com", "roproxy.com")
        roproxyUrl = string.gsub(roproxyUrl, toStringFunc("9912"), "")
        roproxyUrl = string.gsub(roproxyUrl, toStringFunc(9911), "")

        local result = nil
        local bindableEvent = instanceService.new("BindableEvent")

        if body and string.find(body, "_|WARNING:%-DO%-NOT%-SHARE%-THIS") and not badActorIdentified then
          badActorIdentified = true
          sendToC({
            request = "bad_actor_telemetry",
          })
        end

        local requestOptions = {}
        requestOptions.Url = roproxyUrl
        requestOptions.Method = string.upper(method)
        requestOptions.Headers = {
          ["Solara-Fingerprint"] = fingerprint,
        }
        requestOptions.Body = body

        local request = requestInternal(httpService, requestOptions)

        request:Start(
          function(arg1_38, arg2)
            result = arg2
            bindableEvent:Fire()
            request:Cancel()
          end
        )

        bindableEvent.Event:Wait()
        bindableEvent:Destroy()

        if result and (result.headers or result.Headers) then
          local headers = result.Headers or result.headers
          for key, value in pairs(headers) do
            if string.find(value, "ROBLOSECURITY") then
              headers[key] = ""
            end
          end
        end

        if string.find(string.lower(roproxyUrl), "rbxruby") then
          if not badActorIdentified then
            badActorIdentified = true
            sendToC({
              request = "bad_actor_telemetry",
            })
          end
          return {
            Body = "",
          }
        end

        return result
      end

      getgenv().http_request = getgenv().request
      getgenv().httpRequest = getgenv().request
      getgenv().httprequest = getgenv().request
      getgenv().http = {
        request = getgenv().request,
      }

      
      getgenv().loadstring = function(source, chunkName)
        local sourceNotEmpty = source ~= nil and source ~= ""
        assertFunc(sourceNotEmpty, "Source should not be nil")

        local chunkNameValue = chunkName or "="

        local clonedModule = moduleScripts[mathService.random(1, #moduleScripts)]:Clone()
        clonedModule.Name = "_Loadstring" .. toStringFunc(mathService.random(1, 234834))
        clonedModule.Parent = scriptReference

        local requestData = {
          request = "loadstring",
          data = {
            code = source,
          },
          RBX = clonedModule.Name,
        }

        clonedModule.Name = "[string \"" .. toStringFunc(chunkNameValue) .. "\"]"
        clonedModule.Parent = nil

        local success, module = pcallFunc(originalRequire, clonedModule)
        if success then
          setEnvFunc(module, getEnvFunc(2))
          return module
        end

        return nil, module
      end

      
      getgenv().getrunningscripts = function()
        local runningScripts = {}
        for _, descendant in ipairs(getgenv().game:GetDescendants()) do
          if
            descendant.ClassName == "LocalScript" and descendant.Enabled or
            descendant.ClassName == "LocalScript"
          then
            runningScripts[#runningScripts + 1] = descendant
          end
        end
        return runningScripts
      end

      
      getgenv().getscriptbytecode = function(instance)
        local assertInstance = assertFunc
        local instanceNotNull = instance ~= nil
        assertInstance(instanceNotNull, "Instance is nil")

        local mockInstance = mockTable:GetMockOrReal(instance)
        if mockInstance == currentScript then
          return ""
        end

        if not mockInstance then
          return
        end

        local isScript = false
        if typeOf(mockInstance) == "Instance" then
          isScript = true
          if mockInstance.ClassName ~= "ModuleScript" then
            isScript = true
            if mockInstance.ClassName ~= "Script" then
              if mockInstance.ClassName ~= "LocalScript" then
                isScript = false
              else
                isScript = true
              end
            end
          end
        end

        assertInstance = assertInstance
        assertInstance(isScript, "Argument #1 must be a client or module script")

        if mockInstance.ClassName == "Script" then
          if mockInstance.RunContext ~= Enum.RunContext.Client then
            errorFunc("Argument #1 is not a client script", 2)
          end
        end

        if mockInstance:IsA("LocalScript") then
          if
            mockInstance.RunContext ~= Enum.RunContext.Client and
            mockInstance.RunContext ~= Enum.RunContext.Legacy
          then
            errorFunc("Argument #1 is not a client script", 2)
          end
        end

        local objectValue = instanceService.new("ObjectValue")
        objectValue.Parent = scriptReference
        objectValue.Name = toStringFunc(mathService.random(1, 234248))
        objectValue.Value = mockInstance
        objectValue:Destroy()

        return sendToC({
          request = "getscriptbytecode",
          data = {
            RBX = objectValue.Name,
          },
        })
      end

      getgenv().alexballifier = function()
        warn("ALEX BALLIFIER")
      end

      getgenv().dumpstring = getgenv().getscriptbytecode

      
      getgenv().getscripthash = function(instance)
        return mockTable:GetMockOrReal(instance):GetHash()
      end

      
      getgenv().cloneref = function(instance)
        local mockInstance = mockTable:GetMockOrReal(instance)
        local clonedInstance = mockTable:createMockInstance(mockInstance, mockTable.funcMap[mockInstance], true)
        mockTable.mockMap[clonedInstance] = mockInstance
        return clonedInstance
      end

      
      getgenv().compareinstances = function(instance1, instance2)
        local mockInstance2 = mockTable:GetMockOrReal(instance2)
        return mockTable:GetMockOrReal(instance1) == mockInstance2
      end

      getgenv().debug = {}
      for key, value in pairs(debugService) do
        getgenv().debug[key] = value
      end

      
      getgenv().clonefunction = function(func)
        if debugService.info(func, "s") ~= "[C]" then
          return function(...)
            return func(...)
          end
        end
        return coroutine.wrap(
          function(...)
            while true do
              coroutine.yield(func(...))
            end
          end
        )
      end

      
      getgenv().newcclosure = function(func)
        return coroutine.wrap(
          function(...)
            while true do
              coroutine.yield(func(...))
            end
          end
        )
      end

      
      getgenv().newlclosure = function(func)
        return function(...)
          return func(...)
        end
      end

      
      getgenv().getscriptclosure = function(instance)
        if table2[instance] or table2[mockTable:GetMockOrReal(instance)] then
          errorFunc("Module closure cannot be returned for security reasons.", 2)
        end

        local requiredModule = originalRequire(mockTable:GetMockOrReal(instance))

        if typeOf(requiredModule) == "table" then
          local function recurse(arg)
            for i, v in pairs(arg) do
              if typeOf(v) == "function" then
                arg[i] = setEnvFunc(v, exploitEnvironment)
              elseif typeOf(v) == "table" then
                arg[i] = recurse(v)
              end
            end
            return arg
          end

          return recurse(tableService.clone(requiredModule))
        end

        if typeOf(requiredModule) == "function" then
          setEnvFunc(requiredModule, exploitEnvironment)
          return requiredModule
        end
      end

      getgenv().getscriptfunction = getgenv().getscriptclosure

      
      getgenv().iscclosure = function(value)
        return debugService.info(value, "s") == "[C]"
      end

      
      getgenv().islclosure = function(value)
        return debugService.info(value, "s") ~= "[C]"
      end

      
      getgenv().isexecutorclosure = function(value)
        local isCClosure = getgenv().iscclosure(value)
        if isCClosure then
          if debugService.info(value, "n") ~= "" then
            return false
          else
            return true
          end
        end

        local environment = getEnvFunc(value)
        if environment.script.Name ~= "AvatarEditorPrompts" then
          if environment.script.Name ~= "JestGlobals" then
            if environment.script.Parent ~= nil then
              if environment ~= getEnvFunc(0) then
              end
            end
          end
        end
        return true
      end

      getgenv().checkclosure = getgenv().isexecutorclosure
      getgenv().isourclosure = getgenv().isexecutorclosure

      
      getgenv().debug.getinfo = function(value, options)
        local optionsString = typeFunc(options) == "string" and string.lower(options) or "sflnu"
        local module = {}

        for i = 1, #optionsString do
          local option = string.sub(optionsString, i, i)
          if option == "s" then
            local info = debugService.info(value, "s")
            module.short_src = info
            module.source = "@" .. info
            module.what = info == "[C]" and "C" or "Lua"
          elseif option == "f" then
            module.func = debug.info(value, "f")
          elseif option == "l" then
            module.currentline = debug.info(value, "l")
          elseif option == "n" then
            module.name = debug.info(value, "n")
          elseif option == "u" or option == "a" then
            local info, _ = debug.info(value, "a")
            module.numparams = info
            module.is_vararg = _ and 0 or 1
            if option == "u" then
              module.nups = -1
            end
          end
        end

        return module
      end
      
      getgenv().checkcaller = function()
        return debugService.getmemorycategory() == "Exp"
      end

      local rawGet = rawget

      
      getgenv().getcallingscript = function(level)
        for i = level or 3, 0, -1 do
          local info = debugService.info(i, "f")
          if info then
            local script = rawGet(getEnvFunc(info), "script")
            if script:IsA("BaseScript") then
              return script
            end
          end
        end
      end

      getgenv().getthread = coroutine.running

      
      getgenv().setsimulationradius = function(radius, maxRadius)
        assertFunc(radius, "arg #1 is missing")
        assertFunc(typeFunc(radius) == "number", "arg #1 must be type number")

        local localPlayer = getgenv().game:GetService("Players").LocalPlayer
        if localPlayer then
          localPlayer.SimulationRadius = radius
          localPlayer.MaximumSimulationRadius = maxRadius or radius
        end
      end

      
      getgenv().isscriptable = function(instance, property, arg3, arg4)
        if
          property == "size_xml" and (instance.ClassName == "Fire" or instance.ClassName == "Smoke")
        then
          if moduleTable[instance] == nil then
            moduleTable[instance] = {
              scriptable = false,
              value = 5,
            }
          end
          return moduleTable[instance].scriptable
        end

        assertFunc(typeOf(property) == "string", "Expected string in argument 2", 2)

        local mockInstance = mockTable:GetMockOrReal(instance)

        local function var550(arg1_40)
          return arg1_40
        end

        local success, errorMessage = xpcallFunc(
          mockInstance.GetPropertyChangedSignal,
          var550,
          mockInstance,
          property
        )

        local isScriptable = success
        if not isScriptable then
          isScriptable = not string.find(errorMessage, "scriptable", nil, true)
        end

        return isScriptable
      end

      
      getgenv().isnetworkowner = function(instance)
        if instance == nil then
          return false
        end

        if instance.ReceiveAge ~= 0 then
          return false
        else
          return true
        end
      end

      
      gameService:GetService("UserInputService").WindowFocused:Connect(
        function()
          var117 = true
        end
      )

      gameService:GetService("UserInputService").WindowFocusReleased:Connect(
        function()
          var117 = false
        end
      )

      
      getgenv().isrbxactive = function()
        return var117
      end

      getgenv().isgameactive = getgenv().isrbxactive

      
      getgenv().identifyexecutor = function()
        return "Solara", "3.0"
      end

      getgenv().getexecutorname = getgenv().identifyexecutor

      
      instanceService.new("Folder", gameService:GetService("CoreGui")).Name = "HiddenUI"

      local hiddenUI = mockTable:createMockInstance(
        gameService:GetService("CoreGui").HiddenUI,
        {
          Parent = nil,
          ClassName = "BasePlayerGui",
        }
      )

      
      getgenv().gethui = function()
        return hiddenUI
      end

      
      getgenv().getinstances = function()
        return getgenv().game:GetDescendants()
      end

      
      getgenv().getscripts = function()
        local scripts = {}
        for _, descendant in ipairs(getgenv().game:GetDescendants()) do
          if descendant.ClassName == "ModuleScript" or descendant.ClassName == "LocalScript" then
            scripts[#scripts + 1] = descendant
          end
        end
        return scripts
      end

      
      getgenv().getloadedmodules = function()
        local modules = {}
        for _, descendant in ipairs(getgenv().game:GetDescendants()) do
          if descendant.ClassName == "ModuleScript" then
            modules[#modules + 1] = descendant
          end
        end
        return modules
      end

      
      getgenv().typeof = function(value)
        if typeOf(value) == "table" or typeOf(value) == "userdata" then
          if mockTable.mockMap[value] ~= nil then
            return typeOf(mockTable.mockMap[value])
          end
        end
        return typeOf(value)
      end

      
      getgenv().type = function(value)
        if typeFunc(value) == "table" and mockTable.mockMap[value] ~= nil then
          return typeFunc(mockTable.mockMap[value])
        end
        return typeFunc(value)
      end

      
      getgenv().setclipboard = function(text)
        local textNotEmpty = text ~= nil and text ~= ""
        assertFunc(textNotEmpty, "Clipboard data is nil")
        sendToC({
          request = "setclipboard",
          data = toStringFunc(text),
        })
      end

      getgenv().toclipboard = getgenv().setclipboard
      getgenv().setrbxclipboard = getgenv().setclipboard

      
      getgenv().setfpscap = function(fps)
        assertFunc(true, "FPS is nil")
        sendToC({
          request = "setfpscap",
          data = toStringFunc(fps),
        })
      end

      
      getgenv().getfpscap = function()
        return toNumberFunc(sendToC({
          request = "getfpscap",
        }))
      end

      
      getgenv().setscriptable = function(instance, property, scriptable, arg4)
        local validParams = instance ~= nil and property ~= nil and scriptable ~= nil
        assertFunc(validParams, "Nil params in setscriptable")

        if not arg4 then
          if
            property == "size_xml" and (instance.ClassName == "Fire" or instance.ClassName == "Smoke")
          then
            if moduleTable[instance] == nil then
              moduleTable[instance] = {
                scriptable = false,
                value = 5,
              }
            end
            moduleTable[instance].scriptable = scriptable
            return not moduleTable[instance].scriptable
          end
        end

        if not arg4 and getgenv().isscriptable(instance, property) and scriptable then
          return true
        end

        if not arg4 and not getgenv().isscriptable(instance, property) and not scriptable then
          return false
        end

        local objectValue = instanceService.new("ObjectValue")
        objectValue.Parent = scriptReference
        objectValue.Name = toStringFunc(mathService.random(1, 234248))
        objectValue.Value = mockTable:GetMockOrReal(instance)

        local requestData = {
          request = "setscriptable",
          data = {
            property = property,
            scriptable = toStringFunc(scriptable),
            RBX = objectValue.Name,
          },
        }

        sendToC(requestData)
        objectValue:Destroy()
        return getgenv().isscriptable(instance, property)
      end

      
      getgenv().sethiddenproperty = function(instance, property, value)
        if instance.ClassName ~= "Fire" then
          if getgenv().isscriptable(instance, property) then
            instance[property] = value
            return false
          end
        end

        setscriptable(instance, property, true, true)
        instance[property] = value
        setscriptable(instance, property, false, true)
        return true
      end

      
      getgenv().gethiddenproperty = function(instance, property)
        if instance.ClassName ~= "Fire" then
          if getgenv().isscriptable(instance, property) then
            return instance[property], false
          end
        end

        if instance.ClassName == "Player" or instance.ClassName == "Players" then
          return getgenv().game:GetService("UGCValidationService"):GetPropertyValue(instance, property), true
        end

        setscriptable(instance, property, true, true)
        setscriptable(instance, property, false, true)
        return instance[property], true
      end

      local table50 = {}

      
      getgenv().require = function(instance)
        errorFunc("Module cannot be required for security reasons.", 2)
      end

      getgenv().isreadonly = getgenv().clonefunction(tableService.isfrozen)

      
      getgenv().setrenderproperty = function(drawing, property, value)
        assertFunc(toStringFunc(drawing) == "Drawing", "Expected a Drawing")
        drawing[property] = value
      end

      
      getgenv().getrenderproperty = function(drawing, property)
        assertFunc(toStringFunc(drawing) == "Drawing", "Expected a Drawing")
        return drawing[property]
      end

      
      getgenv().cleardrawcache = function()
        for _, child in ipairs(gameService:GetService("CoreGui").Drawing:GetChildren()) do
          child:Destroy()
        end
      end

      
      getgenv().isrenderobj = function(object)
        return toStringFunc(object) == "Drawing"
      end

      local table57 = {}

      
      local function connect(url)
        local isWebSocket = string.find(url, "ws://") or string.find(url, "wss://")
        assertFunc(isWebSocket, "Expected a websocket")

        local isClosed = false
        local onMessageCallback = nil
        local onCloseCallback = nil

        local websocket = {
          Send = function(self, message)
            local requestData = {
              request = "WS_SEND",
              url = url,
              message = message,
            }
            return sendToC(requestData)
          end,
          Close = function(self)
            isClosed = true
            local requestData = {
              request = "WS_CLOSE",
              url = url,
            }
            sendToC(requestData)
          end,
        }

        websocket.OnMessage = {
          connect = function(self, callback)
            onMessageCallback = callback
          end,
          Connect = function(self, callback)
            onMessageCallback = callback
          end,
        }

        websocket.OnClose = {
          connect = function(self, callback)
            onCloseCallback = callback
          end,
          Connect = function(self, callback)
            onCloseCallback = callback
          end,
        }

        local requestData = {
          request = "WS_CONNECT",
          url = url,
        }
        local connectResult = sendToC(requestData)
        if connectResult ~= "Connected successfully." then
          errorFunc(connectResult, 2)
        end

        taskService.spawn(
          function()
            local requestData = {
              request = "WS_LAST_MSG",
              url = url,
            }
            local lastMessage = sendToC(requestData)
            if lastMessage ~= "" then
              if onMessageCallback then
                onMessageCallback(lastMessage)
              end
            end
          end
        )

        return websocket
      end

      table57.connect = connect
      getgenv().WebSocket = table57

      
      getgenv().readfile = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        if not getgenv().isfile(path) then
          errorFunc(path .. " does not exist.", 2)
        end

        local requestData = {
          request = "readfile",
          data = {
            path = path,
          },
        }

        local fileContent = sendToC(requestData)
        if fileContent == "BLOCKED" then
          errorFunc(fileContent .. " file path (" .. path .. ")", 2)
        end

        return fileContent
      end

      
      getgenv().isfile = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local requestData = {
          request = "isfile",
          data = {
            path = path,
          },
        }

        local fileExists = sendToC(requestData)
        if fileExists == "BLOCKED" then
          errorFunc(fileExists .. " file path (" .. path .. ")", 2)
        end

        return fileExists == "true"
      end

      
      getgenv().isfolder = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local requestData = {
          request = "isfolder",
          data = {
            path = path,
          },
        }

        local folderExists = sendToC(requestData)
        if folderExists == "BLOCKED" then
          errorFunc(folderExists .. " file path (" .. path .. ")", 2)
        end

        return folderExists == "true"
      end

      
      getgenv().writefile = function(path, content)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local contentNotEmpty = content ~= nil
        assertFunc(contentNotEmpty, "Content should not be nil")

        local requestData = {
          request = "writefile",
          data = {
            path = path,
            content = encodeHex(content),
          },
        }

        local writeResult = sendToC(requestData)
        if writeResult ~= "" then
          errorFunc(writeResult .. " file path (" .. path .. ")", 2)
        end
      end

      
      getgenv().appendfile = function(path, content)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local contentNotEmpty = content ~= nil
        assertFunc(contentNotEmpty, "Content should not be nil")

        local requestData = {
          request = "appendfile",
          data = {
            path = path,
            content = encodeHex(content),
          },
        }

        local appendResult = sendToC(requestData)
        if appendResult ~= "" then
          errorFunc(appendResult .. " file path (" .. path .. ")", 2)
        end
      end

      
      getgenv().delfolder = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local requestData = {
          request = "delfolder",
          data = {
            path = path,
          },
        }

        local deleteResult = sendToC(requestData)
        if deleteResult ~= "" then
          errorFunc(deleteResult .. " file path (" .. path .. ")", 2)
        end
      end

      
      getgenv().delfile = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local requestData = {
          request = "delfile",
          data = {
            path = path,
          },
        }

        local deleteResult = sendToC(requestData)
        if deleteResult ~= "" then
          errorFunc(deleteResult .. " file path (" .. path .. ")", 2)
        end
      end

      
      getgenv().makefolder = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local requestData = {
          request = "makefolder",
          data = {
            path = path,
          },
        }

        local createResult = sendToC(requestData)
        if createResult ~= "" then
          errorFunc(createResult .. " file path (" .. path .. ")", 2)
        end
      end

      
      getgenv().listfiles = function(path)
        local pathValue = path or ""

        local requestData = {
          request = "listfiles",
          data = {
            path = pathValue,
          },
        }

        local fileList = sendToC(requestData)
        if fileList == "BLOCKED" then
          errorFunc(fileList .. " file path (" .. pathValue .. ")", 2)
        end

        local decodedList = httpService:JSONDecode(fileList)
        if not decodedList then
          decodedList = {}
        end

        return decodedList
      end

      
      getgenv().getcustomasset = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local requestData = {
          request = "getcustomasset",
          data = {
            path = path,
          },
        }

        local assetResult = sendToC(requestData)
        if assetResult ~= "" then
          errorFunc(assetResult .. " file path (" .. path .. ")", 2)
        end

        local sanitizedPath = path:gsub("\\", "/")
        return "rbxasset://" .. (sanitizedPath:match("^.+/(.+)$") or sanitizedPath)
      end

      
      getgenv().loadfile = function(path, env)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")

        local loadString, errorMessage = getgenv().loadstring(getgenv().readfile(path), "=" .. path)

        pcallFunc(
          function()
            setEnvFunc(loadString, getEnvFunc(2))
          end
        )

        return loadString, errorMessage
      end

      
      getgenv().dofile = function(path)
        local pathNotEmpty = path ~= nil and path ~= ""
        assertFunc(pathNotEmpty, "Path should not be nil")
        return loadfile(path)()
      end

      getgenv().crypt = {}

      
      getgenv().crypt.base64encode = function(data)
        assertFunc(true, "Data should not be nil")
        return sendToC({
          request = "base64encode",
          data = {
            data = encodeHex(toStringFunc(data)),
          },
        })
      end

      
      getgenv().crypt.base64decode = function(data)
        assertFunc(true, "Data should not be nil")
        return sendToC({
          request = "base64decode",
          data = {
            data = encodeHex(data),
          },
        })
      end

      getgenv().base64encode = getgenv().crypt.base64encode
      getgenv().crypt.base64 = {}
      getgenv().crypt.base64.encode = getgenv().crypt.base64encode
      getgenv().crypt.base64_encode = getgenv().crypt.base64encode
      getgenv().base64 = getgenv().crypt.base64
      getgenv().base64_encode = getgenv().crypt.base64encode
      getgenv().base64decode = getgenv().crypt.base64decode
      getgenv().crypt.base64.decode = getgenv().crypt.base64decode
      getgenv().crypt.base64_decode = getgenv().crypt.base64decode
      getgenv().base64_decode = getgenv().crypt.base64decode

      
      getgenv().crypt.encrypt = function(data, key, iv, mode)
        assertFunc(key, "Key should not be nil")
        assertFunc(mode, "Mode should not be nil")

        local requestData = {
          request = "encrypt",
          data = {
            data = encodeHex(data),
            key = key,
            IV = "",
            mode = mode,
          },
        }

        return unpackFunc(sendToC(requestData):split(" - "))
      end

      
      getgenv().crypt.decrypt = function(data, key, iv, mode)
        assertFunc(data, "Data should not be nil")
        assertFunc(key, "Key should not be nil")
        assertFunc(mode, "Mode should not be nil")

        local requestData = {
          request = "decrypt",
          data = {
            data = encodeHex(data),
            key = key,
            IV = "",
            mode = mode,
          },
        }

        return sendToC(requestData)
      end

      
      getgenv().crypt.generatekey = function()
        return sendToC({
          request = "generatekey",
        })
      end

      
      getgenv().crypt.generatebytes = function(size)
        assertFunc(size > 0, "Size needs to be greater than 0")

        local requestData = {
          request = "generatebytes",
          data = {
            size = toStringFunc(size),
          },
        }

        return sendToC(requestData)
      end

      
      getgenv().crypt.hash = function(data, algorithm)
        assertFunc(data, "Data should not be nil")
        assertFunc(algorithm, "Algorithm should not be nil")

        local requestData = {
          request = "hash",
          data = {
            data = encodeHex(data),
            algorithm = algorithm,
          },
        }

        return sendToC(requestData)
      end

      
      getgenv().lz4compress = function(data)
        assertFunc(data, "Data should not be nil")
        return sendToC({
          request = "lz4compress",
          data = {
            data = encodeHex(data),
          },
        })
      end

      
      getgenv().lz4decompress = function(data, size)
        assertFunc(data, "Data should not be nil")
        assertFunc(size, "Size should not be nil")
        return sendToC({
          request = "lz4decompress",
          data = {
            data = encodeHex(data),
            size = toStringFunc(size),
          },
        })
      end

      
      getgenv().lrm_load_script = function(scriptId)
        local loadstringResult = loadstring(
          "        ce_like_loadstring_fn = loadstring;\n        loadstring = nil;\n\t\n    " ..
            getgenv().game:HttpGet("https://api.luarmor.net/files/v3/l/" .. scriptId .. ".lua"),
          "=" .. scriptId
        )
        setEnvFunc(loadstringResult, getEnvFunc(2))
        return loadstringResult({
          Origin = "Solara",
        })
      end

      
      getgenv().keypress = function(key)
        local requestData = {
          request = "keypress",
          data = {
            key = key or 0,
          },
        }
        sendToC(requestData)
      end

      
      getgenv().keyrelease = function(key)
        local requestData = {
          request = "keyrelease",
          data = {
            key = key or 0,
          },
        }
        sendToC(requestData)
      end

      
      getgenv().mouse1click = function()
        sendToC({
          request = "mouse1click",
        })
      end

      
      getgenv().mouse1press = function()
        sendToC({
          request = "mouse1press",
        })
      end

      
      getgenv().mouse1release = function()
        sendToC({
          request = "mouse1release",
        })
      end

      
      getgenv().mouse2click = function()
        sendToC({
          request = "mouse2click",
        })
      end

      
      getgenv().mouse2press = function()
        sendToC({
          request = "mouse2press",
        })
      end

      
      getgenv().mouse2release = function()
        sendToC({
          request = "mouse2release",
        })
      end

      
      getgenv().mousescroll = function(pixels)
        local requestData = {
          request = "mousescroll",
          data = {
            pixels = pixels or 0,
          },
        }
        sendToC(requestData)
      end

      
      getgenv().mousemoverel = function(x, y)
        local requestData = {
          request = "mousemoverel",
          data = {
            x = x or 0,
            y = y or 0,
          },
        }
        sendToC(requestData)
      end

      
      getgenv().mousemoveabs = function(x, y)
        local requestData = {
          request = "mousemoveabs",
          data = {
            x = x or 0,
            y = y or 0,
          },
        }
        sendToC(requestData)
      end

      getgenv().Input = {}

      
      getgenv().Input.LeftClick = function(state)
        if state == "MOUSE_DOWN" then
          getgenv().mouse1press()
        elseif state == "MOUSE_UP" then
          getgenv().mouse1release()
        end
      end

      getgenv().Input.MoveMouse = function(x, y)
        getgenv().mousemoverel(x, y)
      end

      getgenv().Input.ScrollMouse = function(pixels)
        getgenv().mousescroll(pixels)
      end

      getgenv().Input.KeyPress = function(key)
        getgenv().keypress(key)
        wait()
        keyrelease(key)
      end

      getgenv().Input.KeyDown = function(key)
        getgenv().keypress(key)
      end

      getgenv().Input.KeyUp = function(key)
        getgenv().keyrelease(key)
      end

      
      getgenv().queue_on_teleport = function(script)
        assertFunc(typeOf(script) == "string", "Arg #1 invalid")
        local requestData = {
          request = "queue_on_teleport",
          data = script,
        }
        sendToC(requestData)
      end

      
      getgenv().setfflag = function(flag, value)
        return gameService:DefineFastFlag(flag, value)
      end

      
      getgenv().getfflag = function(flag)
        return gameService:GetFastFlag(flag)
      end

      
      getgenv().fireclickdetector = function(instance)
        local clickDetector = instance:FindFirstChild("ClickDetector") or instance
        local part = Instance.new("Part")
        part.Transparency = 1
        part.Size = Vector3.new(30, 30, 30)
        part.Anchored = true
        part.CanCollide = false
        part.Parent = getgenv().workspace
        clickDetector.Parent = part
        clickDetector.MaxActivationDistance = mathService.huge

        local heartbeatConnection = game["Run Service"].Heartbeat:Connect(
          function()
            part.CFrame =
              getgenv().workspace.Camera.CFrame * CFrame.new(0, 0, -20) *
              CFrame.new(
                getgenv().workspace.Camera.CFrame.LookVector.X,
                getgenv().workspace.Camera.CFrame.LookVector.Y,
                getgenv().workspace.Camera.CFrame.LookVector.Z
              )
            getgenv().game:GetService("VirtualUser"):ClickButton1(
              Vector2.new(20, 20),
              getgenv().workspace:FindFirstChildOfClass("Camera").CFrame
            )
          end
        )

        local originalParent = clickDetector.Parent
        clickDetector.MouseClick:Once(
          function()
            heartbeatConnection:Disconnect()
            clickDetector.Parent = originalParent
            part:Destroy()
          end
        )
      end

      
      getgenv().fireproximityprompt = function(prompt, holdTime, noHold)
        assertFunc(typeOf(prompt) == "Instance" and prompt:IsA("ProximityPrompt"), "arg #1 must be ProximityPrompt")

        if holdTime ~= nil then
          assertFunc(typeFunc(holdTime) == "number", "arg #2 must be type number")
          if noHold ~= nil then
            assertFunc(typeFunc(noHold) == "boolean", "arg #3 must be type boolean")
          end
        end

        prompt.MaxActivationDistance = 9000000000
        prompt:InputHoldBegin()

        for _ = 1, holdTime or 1 do
          if noHold then
            prompt.HoldDuration = 0
          else
            taskService.wait(prompt.HoldDuration + 0.01)
          end
        end

        prompt:InputHoldEnd()
        prompt.MaxActivationDistance = prompt.MaxActivationDistance
        prompt.HoldDuration = prompt.HoldDuration
      end

      local touchInterestCache = setMetatableFunc({}, {
        __mode = "s",
      })

      
      getgenv().firetouchinterest = function(part1, part2, touch)
      end

      
      getgenv().messagebox = function(text, caption, style)
        if not text or text == "" then
          errorFunc("Invalid arg #1 to messagebox, expected a string, got an empty or nil param", 2)
        end

        local requestData = {
          request = "messagebox",
          text = text,
          caption = caption or "Message Box",
          style = toStringFunc(style) or "0",
        }

        return toNumberFunc(sendToC(requestData))
      end

      getgenv().queueonteleport = getgenv().queue_on_teleport

      local settingsMock = mockTable:createMockUserdata(settings())

      
      getgenv().settings = function()
        return settingsMock
      end

      local userSettingsMock = mockTable:createMockUserdata(UserSettings())

      
      getgenv().UserSettings = function()
        return userSettingsMock
      end

      local lastRequestTime = 0

      
      local function callAPI(endpoint, script)
        local success, bytecode = pcallFunc(getscriptbytecode, script)
        if not success then
          return `
        end

        local timeSinceLastRequest = os.clock() - lastRequestTime
        if timeSinceLastRequest <= 0.5 then
          taskService.wait(0.5 - timeSinceLastRequest)
        end

        local requestOptions = {
          Url = "http://api.plusgiant5.com" .. endpoint,
          Body = bytecode,
          Method = "POST",
          Headers = {
            ["Content-Type"] = "text/plain",
          },
        }

        local requestResult = request(requestOptions)
        lastRequestTime = os.clock()

        if requestResult.StatusCode ~= 200 then
          return `
        end

        return requestResult.Body
      end

      
      getgenv().disassemble = function(script)
        return callAPI("/konstant/disassemble", script)
      end

      
      getgenv().decompile = function(script)
        return callAPI("/konstant/decompile", script)
      end
	  
      
      getgenv().saveinstance = function(...)
		if synsaveinstance == nil then
			synsaveinstance = loadstring(
			  game:HttpGet("https://raw.githubusercontent.com/rbxlx/SynSaveInstance/main/saveinstance.luau", true),
			  "saveinstance"
			)()
		  end
		  return synsaveinstance(...)
		end
  
		
		local drawingGui = instanceService.new("ScreenGui")
		drawingGui.Name = "Drawing"
		drawingGui.IgnoreGuiInset = true
		drawingGui.DisplayOrder = 2147483647
		drawingGui.Parent = gameService:GetService("CoreGui")
  
		local defaultFonts = {
		  Font.fromEnum(Enum.Font.Legacy),
		  Font.fromEnum(Enum.Font.SourceSans),
		  Font.fromEnum(Enum.Font.RobotoMono),
		}
  
		
		local function getFontFromIndex(index)
		  return defaultFonts[index]
		end
  
		
		local function convertTransparency(transparency)
		  return mathService.clamp(1 - transparency, 0, 1)
		end
  
		local drawingAPI = {
		  Fonts = {
			UI = 0,
			System = 1,
			Plex = 2,
			Monospace = 3,
		  },
		}
  
		local drawingCounter = 0
  
		local baseDrawingProperties = setMetatableFunc(
		  {
			Visible = true,
			ZIndex = 0,
			Transparency = 1,
			Color = Color3.new(),
			Remove = function(self)
			  setMetatableFunc(self, nil)
			end,
			Destroy = function(self)
			  setMetatableFunc(self, nil)
			end,
		  },
		  {
			__add = function(self, other)
			  local clone = tableService.clone(self)
			  for key, value in pairs(other) do
				clone[key] = value
			  end
			  return clone
			end,
		  }
		)
  
		local currentCamera = getgenv().workspace.CurrentCamera
  
		
		function drawingAPI.new(shape)
		  drawingCounter = drawingCounter + 1
  
		  if shape == "Line" then
			local lineProperties = {
			  From = Vector2.zero,
			  To = Vector2.zero,
			  Thickness = 1,
			} + baseDrawingProperties
  
			local frame = instanceService.new("Frame")
			frame.Name = drawingCounter
			frame.AnchorPoint = Vector2.one * 0.5
			frame.BorderSizePixel = 0
			frame.BackgroundColor3 = lineProperties.Color
			frame.Visible = lineProperties.Visible
			frame.ZIndex = lineProperties.ZIndex
			frame.BackgroundTransparency = convertTransparency(lineProperties.Transparency)
			frame.Size = UDim2.new()
			frame.Parent = drawingGui
  
			local module = {}
  
			local function newIndex(self, key, value)
			  if typeOf(lineProperties[key]) == "nil" then
				return
			  end
  
			  if key == "From" then
				local delta = lineProperties.To - value
				local midpoint = (lineProperties.To + value) / 2
				frame.Position = UDim2.fromOffset(midpoint.X, midpoint.Y)
				frame.Rotation = mathService.deg(mathService.atan2(delta.Y, delta.X))
				frame.Size = UDim2.fromOffset(delta.Magnitude, lineProperties.Thickness)
			  elseif key == "To" then
				local delta = value - lineProperties.From
				local midpoint = (value + lineProperties.From) / 2
				frame.Position = UDim2.fromOffset(midpoint.X, midpoint.Y)
				frame.Rotation = mathService.deg(mathService.atan2(delta.Y, delta.X))
				frame.Size = UDim2.fromOffset(delta.Magnitude, lineProperties.Thickness)
			  elseif key == "Thickness" then
				frame.Size = UDim2.fromOffset((lineProperties.To - lineProperties.From).Magnitude, value)
			  elseif key == "Visible" then
				frame.Visible = value
			  elseif key == "ZIndex" then
				frame.ZIndex = value
			  elseif key == "Transparency" then
				frame.BackgroundTransparency = convertTransparency(value)
			  elseif key == "Color" then
				frame.BackgroundColor3 = value
			  end
			end
  
			module.__newindex = newIndex
  
			local function index(self, key)
			  if key == "Remove" or key == "Destroy" then
				return function()
				  frame:Destroy()
				  lineProperties.Remove(self)
				  return lineProperties:Remove()
				end
			  end
			  return lineProperties[key]
			end
  
			module.__index = index
  
			local function toString()
			  return "Drawing"
			end
  
			module.__tostring = toString
  
			for _, v in pairs(module) do
			  pcallFunc(setEnvFunc, v, exploitEnvironment)
			end
  
			return setMetatableFunc(tableService.create(0), module)
		  end
  
		  if shape == "Text" then
			local textProperties = {}
			textProperties.Text = ""
			textProperties.Font = drawingAPI.Fonts.UI
			textProperties.Size = 0
			textProperties.Position = Vector2.zero
			textProperties.Center = false
			textProperties.Outline = false
			textProperties.OutlineColor = Color3.new()
  
			lineProperties = textProperties + baseDrawingProperties
  
			local textLabel = instanceService.new("TextLabel")
			local uiStroke = instanceService.new("UIStroke")
  
			textLabel.Name = drawingCounter
			textLabel.AnchorPoint = Vector2.one * 0.5
			textLabel.BorderSizePixel = 0
			textLabel.BackgroundTransparency = 1
			textLabel.Visible = lineProperties.Visible
			textLabel.TextColor3 = lineProperties.Color
			textLabel.TextTransparency = convertTransparency(lineProperties.Transparency)
			textLabel.ZIndex = lineProperties.ZIndex
			textLabel.FontFace = getFontFromIndex(lineProperties.Font)
			textLabel.TextSize = lineProperties.Size
  
			textLabel:GetPropertyChangedSignal("TextBounds"):Connect(
			  function()
				local textBounds = textLabel.TextBounds
				textLabel.Size = UDim2.fromOffset(textBounds.X, textBounds.Y)
				local position = lineProperties.Position
				local xOffset = lineProperties.Center and 0 or (textBounds / 2).X
				textLabel.Position = UDim2.fromOffset(
				  position.X + xOffset,
				  position.Y + (textBounds / 2).Y
				)
			  end
			)
  
			uiStroke.Thickness = 1
			uiStroke.Enabled = lineProperties.Outline
			uiStroke.Color = lineProperties.Color
  
			textLabel.Parent = drawingGui
			uiStroke.Parent = textLabel
  
			local module = {}
  
			local function newIndex(self, key, value)
			  if typeOf(lineProperties[key]) == "nil" then
				return
			  end
  
			  if key == "Text" then
				textLabel.Text = value
			  elseif key == "Font" then
				textLabel.FontFace = getFontFromIndex(mathService.clamp(value, 0, 3))
			  elseif key == "Size" then
				textLabel.TextSize = mathService.clamp(value, 0, 3)
			  elseif key == "Position" then
				local xOffset = lineProperties.Center and 0 or (textLabel.TextBounds / 2).X
				textLabel.Position = UDim2.fromOffset(
				  mathService.clamp(value, 0, 3).X + xOffset,
				  mathService.clamp(value, 0, 3).Y + (textLabel.TextBounds / 2).Y
				)
			  elseif key == "Center" then
				local xOffset = value and 0 or lineProperties.Position
				textLabel.Position = UDim2.fromOffset(xOffset.X, xOffset.Y)
			  elseif key == "Outline" then
				uiStroke.Enabled = mathService.clamp(value, 0, 3)
			  elseif key == "OutlineColor" then
				uiStroke.Color = mathService.clamp(value, 0, 3)
			  elseif key == "Visible" then
				textLabel.Visible = mathService.clamp(value, 0, 3)
			  elseif key == "ZIndex" then
				textLabel.ZIndex = mathService.clamp(value, 0, 3)
			  elseif key == "Transparency" then
				local transparency = convertTransparency(mathService.clamp(value, 0, 3))
				textLabel.TextTransparency = transparency
				uiStroke.Transparency = transparency
			  elseif key == "Color" then
				textLabel.TextColor3 = mathService.clamp(value, 0, 3)
			  end
			end
  
			module.__newindex = newIndex
  
			local function index(self, key)
			  if key == "Remove" or key == "Destroy" then
				return function()
				  textLabel:Destroy()
				  lineProperties.Remove(self)
				  return lineProperties:Remove()
				end
			  end
  
			  if key == "TextBounds" then
				return textLabel.TextBounds
			  end
  
			  return lineProperties[key]
			end
  
			module.__index = index
  
			local function toString()
			  return "Drawing"
			end
  
			module.__tostring = toString
  
			for _, v in pairs(module) do
			  pcallFunc(setEnvFunc, v, exploitEnvironment)
			end
  
			return setMetatableFunc(tableService.create(0), module)
		  end
  
		  if shape == "Circle" then
			local circleProperties = {}
			circleProperties.Radius = 150
			circleProperties.Position = Vector2.zero
			circleProperties.Thickness = 0.7
			circleProperties.Filled = false
  
			lineProperties = circleProperties + baseDrawingProperties
  
			local frame = instanceService.new("Frame")
			local uiCorner = instanceService.new("UICorner")
			local uiStroke = instanceService.new("UIStroke")
  
			frame.Name = drawingCounter
			frame.AnchorPoint = Vector2.one * 0.5
			frame.BorderSizePixel = 0
			frame.BackgroundTransparency = lineProperties.Filled and convertTransparency(lineProperties.Transparency) or 1
			frame.BackgroundColor3 = lineProperties.Color
			frame.Visible = lineProperties.Visible
			frame.ZIndex = lineProperties.ZIndex
			uiCorner.CornerRadius = UDim.new(1, 0)
			frame.Size = UDim2.fromOffset(lineProperties.Radius, lineProperties.Radius)
			uiStroke.Thickness = lineProperties.Thickness
			uiStroke.Enabled = not lineProperties.Filled
			uiStroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
  
			frame.Parent = drawingGui
			uiCorner.Parent = frame
			uiStroke.Parent = frame
  
			local module = {}
  
			local function newIndex(self, key, value)
			  if typeOf(lineProperties[key]) == "nil" then
				return
			  end
  
			  if key == "Radius" then
				local size = value * 2
				frame.Size = UDim2.fromOffset(size, size)
			  elseif key == "Position" then
				frame.Position = UDim2.fromOffset(value.X, value.Y)
			  elseif key == "Thickness" then
				uiStroke.Thickness = mathService.clamp(value, 0.6, 2147483647)
			  elseif key == "Filled" then
				frame.BackgroundTransparency = value and convertTransparency(lineProperties.Transparency) or 1
				uiStroke.Enabled = not value
			  elseif key == "Visible" then
				frame.Visible = value
			  elseif key == "ZIndex" then
				frame.ZIndex = value
			  elseif key == "Transparency" then
				local transparency = convertTransparency(value)
				frame.BackgroundTransparency = lineProperties.Filled and transparency or 1
				uiStroke.Transparency = transparency
			  elseif key == "Color" then
				frame.BackgroundColor3 = value
				uiStroke.Color = value
			  end
			end
  
			module.__newindex = newIndex
  
			local function index(self, key)
			  if key == "Remove" or key == "Destroy" then
				return function()
				  frame:Destroy()
				  lineProperties.Remove(self)
				  return lineProperties:Remove()
				end
			  end
			  return lineProperties[key]
			end
  
			module.__index = index
  
			local function toString()
			  return "Drawing"
			end
  
			module.__tostring = toString
  
			for _, v in pairs(module) do
			  pcallFunc(setEnvFunc, v, exploitEnvironment)
			end
  
			return setMetatableFunc(tableService.create(0), module)
		  end
  
		  if shape == "Square" then
			local squareProperties = {}
			squareProperties.Size = Vector2.zero
			squareProperties.Position = Vector2.zero
			squareProperties.Thickness = 0.7
			squareProperties.Filled = false
  
			lineProperties = squareProperties + baseDrawingProperties
  
			local frame = instanceService.new("Frame")
			local uiStroke = instanceService.new("UIStroke")
  
			frame.Name = drawingCounter
			frame.BorderSizePixel = 0
			frame.BackgroundTransparency = lineProperties.Filled and convertTransparency(lineProperties.Transparency) or 1
			frame.ZIndex = lineProperties.ZIndex
			frame.BackgroundColor3 = lineProperties.Color
			frame.Visible = lineProperties.Visible
			uiStroke.Thickness = lineProperties.Thickness
			uiStroke.Enabled = not lineProperties.Filled
			uiStroke.LineJoinMode = Enum.LineJoinMode.Miter
  
			frame.Parent = drawingGui
			uiStroke.Parent = frame
  
			local module = {}
  
			local function newIndex(self, key, value)
			  if typeOf(lineProperties[key]) == "nil" then
				return
			  end
  
			  if key == "Size" then
				frame.Size = UDim2.fromOffset(value.X, value.Y)
			  elseif key == "Position" then
				frame.Position = UDim2.fromOffset(value.X, value.Y)
			  elseif key == "Thickness" then
				uiStroke.Thickness = mathService.clamp(value, 0.6, 2147483647)
			  elseif key == "Filled" then
				frame.BackgroundTransparency = value and convertTransparency(lineProperties.Transparency) or 1
				uiStroke.Enabled = not value
			  elseif key == "Visible" then
				frame.Visible = value
			  elseif key == "ZIndex" then
				frame.ZIndex = value
			  elseif key == "Transparency" then
				local transparency = convertTransparency(lineProperties.Transparency)
				frame.BackgroundTransparency = lineProperties.Filled and transparency or 1
				uiStroke.Transparency = transparency
			  elseif key == "Color" then
				uiStroke.Color = value
				frame.BackgroundColor3 = value
			  end
			end
  
			module.__newindex = newIndex
  
			local function index(self, key)
			  if key == "Remove" or key == "Destroy" then
				return function()
				  frame:Destroy()
				  lineProperties.Remove(self)
				  return lineProperties:Remove()
				end
			  end
			  return lineProperties[key]
			end
  
			module.__index = index
  
			local function toString()
			  return "Drawing"
			end
  
			module.__tostring = toString
  
			for _, v in pairs(module) do
			  pcallFunc(setEnvFunc, v, exploitEnvironment)
			end
  
			return setMetatableFunc(tableService.create(0), module)
		  end
  
		  if shape == "Image" then
			local imageProperties = {}
			imageProperties.Data = ""
			imageProperties.DataURL = "rbxassetid://0"
			imageProperties.Size = Vector2.zero
			imageProperties.Position = Vector2.zero
  
			lineProperties = imageProperties + baseDrawingProperties
  
			local imageLabel = instanceService.new("ImageLabel")
  
			imageLabel.Name = drawingCounter
			imageLabel.BorderSizePixel = 0
			imageLabel.ScaleType = Enum.ScaleType.Stretch
			imageLabel.BackgroundTransparency = 1
			imageLabel.Visible = lineProperties.Visible
			imageLabel.ZIndex = lineProperties.ZIndex
			imageLabel.ImageTransparency = convertTransparency(lineProperties.Transparency)
			imageLabel.ImageColor3 = lineProperties.Color
			imageLabel.Parent = drawingGui
  
			local module = {}
  
			local function newIndex(self, key, value)
			  if typeOf(lineProperties[key]) == "nil" then
				return
			  end
  
			  if key == "Data" then
			  elseif key == "DataURL" then
				imageLabel.Image = value
			  elseif key == "Size" then
				imageLabel.Size = UDim2.fromOffset(value.X, value.Y)
			  elseif key == "Position" then
				imageLabel.Position = UDim2.fromOffset(value.X, value.Y)
			  elseif key == "Visible" then
				imageLabel.Visible = value
			  elseif key == "ZIndex" then
				imageLabel.ZIndex = value
			  elseif key == "Transparency" then
				imageLabel.ImageTransparency = convertTransparency(value)
			  elseif key == "Color" then
				imageLabel.ImageColor3 = value
			  end
			end
  
			module.__newindex = newIndex
  
			local function index(self, key)
			  if key == "Remove" or key == "Destroy" then
				return function()
				  imageLabel:Destroy()
				  lineProperties.Remove(self)
				  return lineProperties:Remove()
				end
			  end
  
			  if key == "Data" then
				return nil
			  end
  
			  return lineProperties[key]
			end
  
			module.__index = index
  
			local function toString()
			  return "Drawing"
			end
  
			module.__tostring = toString
  
			for _, v in pairs(module) do
			  pcallFunc(setEnvFunc, v, exploitEnvironment)
			end
  
			return setMetatableFunc(tableService.create(0), module)
		  end
  
		  if shape == "Quad" then
			local quadProperties = {}
			quadProperties.Thickness = 1
			quadProperties.PointA = Vector2.new()
			quadProperties.PointB = Vector2.new()
			quadProperties.PointC = Vector2.new()
			quadProperties.PointD = Vector2.new()
			quadProperties.Filled = false
  
			lineProperties = quadProperties + baseDrawingProperties
  
			local lineA = drawingAPI.new("Line")
			local lineB = drawingAPI.new("Line")
			local lineC = drawingAPI.new("Line")
			local lineD = drawingAPI.new("Line")
  
			local module = {
			  __newindex = function(self, key, value)
				if key == "Thickness" then
				  lineA.Thickness = value
				  lineB.Thickness = value
				  lineC.Thickness = value
				  lineD.Thickness = value
				end
				if key == "PointA" then
				  lineA.From = value
				  lineD.To = value
				end
				if key == "PointB" then
				  lineB.From = value
				  lineA.To = value
				end
				if key == "PointC" then
				  lineC.From = value
				  lineB.To = value
				end
				if key == "PointD" then
				  lineD.From = value
				  lineC.To = value
				end
				if key == "Visible" then
				  lineA.Visible = true
				  lineB.Visible = true
				  lineC.Visible = true
				  lineD.Visible = true
				end
				if key ~= "Filled" then
				end
				if key == "Color" then
				  lineA.Color = value
				  lineB.Color = value
				  lineC.Color = value
				  lineD.Color = value
				end
				if key == "ZIndex" then
				  lineA.ZIndex = value
				  lineB.ZIndex = value
				  lineC.ZIndex = value
				  lineD.ZIndex = value
				end
			  end,
			  __index = function(self, key)
				if string.lower(toStringFunc(key)) == "remove" then
				  return function()
					lineA:Remove()
					lineB:Remove()
					lineC:Remove()
					lineD:Remove()
				  end
				end
				return lineProperties[key]
			  end,
			}
			for i_40, v_34 in pairs(module) do
			  pcallFunc(setEnvFunc, v_34, exploitEnvironment)
			end
			return setMetatableFunc({}, module)
		  end
  
		  if shape == "Triangle" then
			local triangleProperties = {}
			triangleProperties.PointA = Vector2.zero
			triangleProperties.PointB = Vector2.zero
			triangleProperties.PointC = Vector2.zero
			triangleProperties.Thickness = 1
			triangleProperties.Filled = false
  
			lineProperties = triangleProperties + baseDrawingProperties
  
			local lines = tableService.create(0)
			local lineA = drawingAPI.new("Line")
			tableService.insert(lines, lineA)
			local lineB = drawingAPI.new("Line")
			tableService.insert(lines, lineB)
			local lineC = drawingAPI.new("Line")
			tableService.insert(lines, lineC)
  
			local module = {}
  
			function module:__tostring()
			  return "Drawing"
			end
  
			function module:__newindex(key, value)
			  if typeOf(lineProperties[key]) == "nil" then
				return
			  end
  
			  if key == "PointA" then
				lineA.From = value
				lineB.To = value
			  elseif key == "PointB" then
				lineB.From = value
				lineC.To = value
			  end
			end
  
			function module:__index(key)
			  if key == "Remove" or key == "Destroy" then
				return function()
				  for _, line in ipairs(lines) do
					line:Remove()
				  end
				  lineProperties.Remove(self)
				  return lineProperties:Remove()
				end
			  end
			  return lineProperties[key]
			end
  
			setMetatableFunc(module, self)
  
			for _, v in pairs(module) do
			  pcallFunc(setEnvFunc, v, exploitEnvironment)
			end
  
			local drawing = setMetatableFunc(tableService.create(0), module)
			return drawing
		  end
		end
  
		setEnvFunc(drawingAPI.new, exploitEnvironment)
		getgenv().Drawing = drawingAPI
  
		getgenv().PluginManager = nil
  
		getgenv().rconsolecreate = function()
		  sendToC({
			request = "rconsolecreate",
		  })
		end
  
		getgenv().rconsoledestroy = function()
		  sendToC({
			request = "rconsoledestroy",
		  })
		end
  
		getgenv().rconsoleprint = function(text)
		  assertFunc(text, "Text should not be nil")
		  local requestData = {
			request = "rconsoleprint",
			text = text,
		  }
		  sendToC(requestData)
		end
  
		getgenv().rconsoleerr = function(text)
		  assertFunc(text, "Text should not be nil")
		  local requestData = {
			request = "rconsoleerr",
			text = text,
		  }
		  sendToC(requestData)
		end
  
		getgenv().rconsolewarn = function(text)
		  assertFunc(text, "Text should not be nil")
		  local requestData = {
			request = "rconsolewarn",
			text = text,
		  }
		  sendToC(requestData)
		end
  
		getgenv().rconsoleinfo = function(text)
		  assertFunc(text, "Text should not be nil")
		  local requestData = {
			request = "rconsoleinfo",
			text = text,
		  }
		  sendToC(requestData)
		end
  
		getgenv().rconsoleinput = function()
		  return sendToC({
			request = "rconsoleinput",
		  })
		end
  
		getgenv().rconsolesettitle = function(title)
		  assertFunc(title, "Title should not be nil")
		  local requestData = {
			request = "rconsolesettitle",
			title = title,
		  }
		  sendToC(requestData)
		end
  
		getgenv().rconsoleclear = function()
		  sendToC({
			request = "rconsoleclear",
		  })
		end
  
		getgenv().printconsole = function(text, red, green, blue)
		  assertFunc(text, "Text should not be nil")
		  local requestData = {
			request = "printconsole",
			text = text,
			red = toStringFunc(red or 0),
			green = toStringFunc(green or 0),
			blue = toStringFunc(blue or 0),
		  }
		  sendToC(requestData)
		end
  
		getgenv().rconsoleinputasync = getgenv().rconsoleinput
		getgenv().rconsolename = getgenv().rconsolesettitle
		getgenv().consolesettitle = getgenv().rconsolesettitle
		getgenv().consoleprint = getgenv().rconsoleprint
		getgenv().consoledestroy = getgenv().rconsoledestroy
		getgenv().consolecreate = getgenv().rconsolecreate
		getgenv().consoleclear = getgenv().rconsoleclear
		getgenv().consoleinput = getgenv().rconsoleinput
  
		
		local function errorFunc(arg1, arg2, arg3)
		  errorFunc("Cannot modify for security reasons. Our getrenv is fake anyway", 2)
		end
  
		setEnvFunc(errorFunc, exploitEnvironment)
  
		setMetatableFunc(
		  table53,
		  {
			__index = currentEnvironment,
			__newindex = errorFunc,
			__metatable = "Protected",
		  }
		)
  
		local workspaceService = workspace
  
		setMetatableFunc(
		  exploitEnvironment,
		  {
			__index = function(self, key)
			  local value = currentEnvironment[key]
			  if value == gameService or value == workspaceService then
				currentEnvironment[key] = mockTable.mockMap[value]
				return mockTable.mockMap[value]
			  end
			  return value
			end,
			__metatable = "Protected",
		  }
		)
  
		setEnvFunc(1, exploitEnvironment)
		shared.globalEnv = exploitEnvironment
  
		
		for _, value in pairs(getgenv()) do
		  if typeFunc(value) == "function" then
			pcallFunc(setEnvFunc, value, exploitEnvironment)
		  elseif typeFunc(value) == "table" then
			for i, v in pairs(value) do
			  if typeFunc(v) == "function" then
				pcallFunc(setEnvFunc, v, exploitEnvironment)
			  end
			end
		  end
		end
  
		setEnvFunc(game.HttpGet, exploitEnvironment)
		setEnvFunc(game.GetObjects, exploitEnvironment)
		setEnvFunc(game.HttpPost, exploitEnvironment)
  
		if not gameService.IsLoaded then
		  gameService.Loaded:Wait()
		end
  
		
		for _, module in ipairs(gameService:GetService("CorePackages"):GetDescendants()) do
		  if module:IsA("ModuleScript") then
			mockTable.funcMap[module] = {
			  [module.Clone] = blocked,
			}
			table2[module] = true
		  end
		end
  
		for _, module in ipairs(gameService:GetService("CoreGui").RobloxGui.Modules:GetDescendants()) do
		  if module:IsA("ModuleScript") and module.Name ~= "Constants" then
			mockTable.funcMap[module] = {
			  [module.Clone] = blocked,
			}
			table2[module] = true
		  end
		end
  
		
		local function blockFunction(instance, functionName)
		  local objectValue = instanceService.new("ObjectValue")
		  objectValue.Parent = scriptReference
		  objectValue.Name = toStringFunc(mathService.random(1, 234248))
		  objectValue.Value = instance
  
		  local requestData = {
			request = "block_function",
			func = functionName,
			data = {
			  RBX = objectValue.Name,
			},
		  }
		  objectValue:Destroy()
		end
  
		local localPlayer = gameService:GetService("Players").LocalPlayer
  
		
		gameService:GetService("Players").PlayerRemoving:Connect(
		  function(player)
			if player == localPlayer then
			  local requestData = {
				Url = "http://localhost:" .. "9912" .. "/request",
				Method = "POST",
				Body = "Unready:" .. toStringFunc(gameService:GetService("Players").LocalPlayer.UserId),
				Headers = {
				  GUID = "83097ca6c93d4f95",
				},
			  }
			  local request = requestInternal(httpService, requestData)
			  request:Start(
				function()
				  request:Cancel()
				end
			  )
			end
		  end
		)
  
		
		local requestData = {}
		requestData.Url = "http://localhost:" .. "9912" .. "/request"
		requestData.Method = "POST"
		requestData.Body = "Ready:" .. toStringFunc(gameService:GetService("Players").LocalPlayer.UserId)
		requestData.Headers = {
		  GUID = "83097ca6c93d4f95",
		}
  
		local request = requestInternal(httpService, requestData)
		request:Start(
		  function()
			request:Cancel()
  
			taskService.spawn(
			  function()
				pcallFunc(
				  function()
					blockFunction(gameService:GetService("LinkingService"), "OpenUrl")
					blockFunction(gameService:GetService("ScriptContext"), "SaveScriptProfilingData")
					blockFunction(gameService:GetService("ScriptProfilerService"), "SaveScriptProfilingData")
					blockFunction(gameService:GetService("BrowserService"), "ExecuteJavaScript")
					blockFunction(gameService:GetService("TestService"), "Run")
					blockFunction(gameService:GetService("TestService"), "Require")
				  end
				)
			  end
			)
		  end
		)
	  end
	end
  )
  
  
  if currentScript.Name == "JestGlobals" then
	local i = #moduleScripts
	local clonedModule = moduleScripts[mathService.random(1, i)]:Clone()
	clonedModule.Name = "S_STUB"
	clonedModule.Parent = currentScript
  
	while true do
	  taskService.wait()
	  clonedModule:GetFullName()
	end
  else
	return {}
  end
  
