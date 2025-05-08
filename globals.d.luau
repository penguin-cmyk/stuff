-- mid way trough I changed from using type = blablabla to just declare function and I'm to lazy to change it

--// basic types
export type Func = (...any) -> any
export type ret = number | string | boolean | nil
export type inp = number | string | boolean 

export type retT = Func | { [any]: any }

--// closures
declare function checkcaller(): boolean 
declare function clonefunction<func..., ret...>(func: (func...) -> ret...): (func...) -> ret... 
declare function getfunctionhash(func: Func): string 
declare function hookfunction<func..., ret...>(func: (func...) -> ret..., replace: Func): (func...) -> ret... 

type Metamethod = "__index" | 
                "__namecall" | 
                "__newindex" | 
                "__concat" | 
                "__call" | 
                "__eq" | 
                "__lt" | 
                "__iter" | 
                "__mode" | 
                "__len" | 
                "__mod" |
                "__unm" |
                "__add" |
                "__sub" |
                "__mul" |
                "__div" |
                "__idiv"|
                "__pow" |
                "__tostring" |
                "__metatable" 
                
declare function hookmetamethod(object: { [any]: any } | Instance, method: Metamethod, hook: Func): Func

export type closure_check = (func: Func) -> boolean 
declare iscclosure: closure_check
declare islclosure: closure_check
declare isexecutorclosure: closure_check
declare isfunctionhooked: closure_check

declare function newcclosure<func..., ret...>(func: (func...) -> ret...): (func...) -> ret... 
declare function restorefunction(func: Func): Func 

--// crypt
declare crypt: {
    base64decode: (data: string) -> string,
    base64encode: (data: string) -> string,
    random: (length: number) -> string,
    generatekey:  () -> string,
}

--// debug
export type getconstant = (func: Func, index: number) -> ret
declare getconstant: getconstant

export type getconstants = (func: Func) -> { ret }
declare getconstants: getconstants

export type setconstant = (func: Func, index: number, value: inp) -> ()
declare setconstant: setconstant

export type getupvalue = (func: Func, index: number) -> ret | { [any]: any }?
declare getupvalue: getupvalue

export type getupvalues = (func: Func) -> { ret | { [any]: any }? }
declare getupvalues: getupvalues

export type setupvalue = (func: Func, index: number, value: inp | { [any]: any }) -> ()
declare setupvalue: setupvalue

export type getproto = (func: Func | number, index: number, activated: boolean?) -> Func
declare getproto: getproto

export type getprotos = (func: Func | number) -> { Func }
declare getprotos: getprotos

export type getstack = (level: number, index: number?) -> any | { [any]: any }
declare getstack: getstack

export type setstack = (level: number, index: number, value: any) -> ()
declare setstack: setstack

export type isvalidlevel = (level: number) -> boolean
declare isvalidlevel: isvalidlevel


type getinfo_returns = {
    source: string,
    what: string,
    numparams: number,
    func: Func,
    short_src: string,
    currentline: number,
    name: string,
    is_vararg: number,
    nups: number
}

export type getinfo = (func: Func | number) -> getinfo_returns
declare getinfo: getinfo

declare debug: {
    getconstant: getconstant,
    getconstants: getconstants,
    setconstant: setconstant,

    getupvalue: getupvalue,
    getupvalues: getupvalues,
    setupvalue: setupvalue,

    getproto: getproto,
    getprotos: getprotos,

    getstack: getstack,
    setstack: setstack,

    getinfo: getinfo,
    isvalidlevel: isvalidlevel
}

--// drawing
declare class BaseDrawing
	Visible: boolean
	ZIndex: number
	Transparency: number
	Color: Color3
	function Destroy(self): ()
end

declare class Line extends BaseDrawing
	From: Vector2
	To: Vector2
	Thickness: number
end

declare class Text extends BaseDrawing
	Text: string
	TextBounds: Vector2
	Font: number
	Size: number
	Position: Vector2
	Center: boolean
	Outline: boolean
	OutlineColor: Color3
end

declare class Image extends BaseDrawing
	Data: string
	Size: Vector2
	Position: Vector2
	Rounding: number
end

declare class Circle extends BaseDrawing
	NumSides: number
	Radius: number
	Position: Vector2
	Thickness: number
	Filled: boolean
end

declare class Square extends BaseDrawing
	Size: Vector2
	Position: Vector2
	Thickness: number
	Filled: boolean
end

declare class Quad extends BaseDrawing
	PointA: Vector2
	PointB: Vector2
	PointC: Vector2
	PointD: Vector2
	Thickness: number
	Filled: boolean
end

declare class Triangle extends BaseDrawing
	PointA: Vector2
	PointB: Vector2
	PointC: Vector2
	Thickness: number
	Filled: boolean
end

declare Drawing: {
	new: ((Type: "Line") -> (Line)) 
        & ((Type: "Text") -> (Text))
        & ((Type: "Image") -> (Image))
        & ((Type: "Circle") -> (Circle))
        & ((Type: "Square") -> (Square))
        & ((Type: "Triangle") -> (Triangle))
        & ((Type: "Quad") -> (Quad)),
	Fonts: { [string]: number },
}
export type Drawing = Line | Text | Image | Circle | Square | Quad | Triangle
export type cleardrawcache = () -> ()
declare cleardrawcache: cleardrawcache

export type getrenderproperty = (drawing: Drawing, property: string) -> any 
declare getrenderproperty: getrenderproperty

export type setrenderproperty = (drawing: Drawing, property: string, value: any) -> ()
declare setrenderproperty: setrenderproperty



export type isrenderobj = (object: any) -> boolean 
declare isrenderobj: isrenderobj

--// env 
export type getgc = (tables: boolean?) -> { [any]: any }
declare getgc: getgc 

export type env = () -> { [any]: any }
declare getgenv: env 
declare getrenv: env
declare getreg: env  
export type functionFilter = {
    Name: string?,
    IgnoreExecutor: boolean?,
    Hash: string?,
    Constants: { inp }?,
    Upvalues: { inp | { [any]: any } }?
}

export type tableFilter = {
    Keys: { [any]: any }?,
    Values: { [any]: any }?,
    KeyValuePairs: { [any]: any }?,
    Metatable: { [any]: any }?
}


declare filtergc: 
    ((filter_type: "table", options: tableFilter, one: boolean?)  -> retT? | { retT }) &
    ((filter_type: "function", options: functionFilter, one: boolean?)  -> retT? | { retT }) 


--// threads
export type gettenv =  (thread: thread)  -> { [any]: any }
declare gettenv: gettenv

export type getthreadstack = (thread: thread, level: number, index: number? )  -> { [any]: any }
declare getthreadstack: getthreadstack

export type setthreadstack = (thread: thread, level: number, index: number, value: inp | { [any]: any } )  -> ()
declare setthreadstack: setthreadstack

--// filesystem
export type write = (path: string, contents: string) -> ()
declare appendfile: write 
declare writefile: write 

export type path = (path: string) -> ()
declare delfile: path 
declare delfolder: path 
declare readfile: path 
declare makefolder: path 

export type getcustomasset = (path: string) -> string 
declare getcustomasset: getcustomasset 

export type is = (path: string) -> boolean 
declare isfile: is 
declare isfolder: is 

export type loadfile = (path: string) -> (Func | nil, string?)
declare loadfile: loadfile 

export type listfiles = (path: string) -> { [number]: string }
declare listfiles: listfiles

--// instances
declare function clonref(object: ScreenGui): ScreenGui
declare function fireproximityprompt(prompt: ProximityPrompt): ()
declare function fireclickdetector(object: ClickDetector, distance: number?, event: string?): ()
declare function firetouchinterest(part1: BasePart, part2: BasePart, toggle: boolean | number): ()
declare function getcallbackvalue(object: Instance, property: string): Func?
declare function gethui(): ()
declare function getinstances(): {}
declare function getnilinstances(): {}
declare function compareinstances(first: Instance, second: Instance): boolean 

--// metatable
declare function getrawmetatable(object: { [any]: any }): { [any]: any }?
declare function setrawmetatable<table>(object: table, metatable:  { [any]: any }): table
declare function setreadonly(table: { [any]: any }, readonly: boolean) 
declare function isreadonly(table: { [any]: any }): boolean 

--// teleport
declare function queue_on_teleport(code: string)
declare function clear_teleport_queue()


--// misc 
type requestOptions = {
    Url: string,
    Body: string?,
    Headers: { [string]: string }?,
    Cookies: { [string]: string }?,
    Method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" 
}

type requestReturn = {
    Body: string,
    StatusCode: number,
    StatusMessage: string,
    Headers: { [string]: string },
    Success: boolean 
}

type saveinstanceOptions = {
    __DEBUG_MODE: boolean?,
    ReadMe: boolean?,
    SafeMode: boolean?,
    ShutdownWhenDone: boolean?,
    AntiIdle: boolean?,
    ShowStatus: boolean?,
    Callback: Func?,
    mode: string?,
    noscripts: boolean?,
    scriptcache: boolean?,
    decomptype: string?,
    timeout: number?,
    DecompileJobless: boolean?,
    SaveBytecode: boolean?,
    DecompileIgnore: { [any]: any }?,
    IgnoreList: { [any]: any }?,
    ExtraInstances: { [any]: any }?,
    IgnoreProperties: { [any]: any }?,
    SaveCacheInterval: number?,
    FilePath: string?,
    Object: Instance?,
    IsModel: boolean?,
    NilInstances: boolean?,
    NilInstancesFixes: { [any]: Func }?,
    IgnoreDefaultProperties: boolean?,
    IgnoreNotArchivable: boolean?,
    IgnorePropertiesOfNotScriptsOnScriptsMode: boolean?,
    IgnoreSpecialProperties: boolean?,
    IsolateLocalPlayer: boolean?,
    IsolateStarterPlayer: boolean?,
    IsolateLocalPlayerCharacter: boolean?,
    RemovePlayerCharacters: boolean?,
    SaveNotCreatable: boolean?,
    IsolatePlayers: boolean?,
    AlternativeWritefile: boolean?,
    IgnoreDefaultPlayerScripts: boolean?,
    IgnoreSharedStrings: boolean?,
    SharedStringOverwrite: boolean?,
    TreatUnionsAsParts: boolean?
}


declare function identifyexecutor(): ( string, string )
declare function request(options: requestOptions): requestReturn
declare function getfflag(flag: string): string 
declare function saveinstance(options: saveinstanceOptions)
declare function isgameactive(): boolean
declare function isrbxactive(): boolean
declare function gethwid(): string
declare function setfpscap(fps: number)
declare function lz4compress(string: string): string 
declare function lz4decompress(string: string): string 
declare function setclipboard(string: string)

--// input
declare function mouse1click(x: number, y: number)
declare function mouse1press(x: number, y: number)
declare function mouse1release()

declare function mouse2click(x: number, y: number)
declare function mouse2press(x: number, y: number)
declare function mouse2release()

declare function mousemovrel(x: number, y: number)
declare function mousemovabs(x: number, y: number)

declare function keypress(key: number)
declare function keyrelease(key: number)

--// rconsole
declare function rconsolecreate()
declare function rconsoleprint(content: string)
declare function rconsolewarn(content: string)
declare function rconsolerror(content: string)
declare function rconsolesettitle(title: string)
declare function rconolsehide()
declare function rconsoledestroy()
declare function rconsoledestroy()
declare function rconolsehidden(): boolean 

--// actors
export type actor_added = {
    connect: (actor: Actor) -> ()
}

declare function run_on_actor(actor: Actor, code: string)
declare function create_comm_channel(): number 
declare on_actor_added: actor_added
--// reflection
declare function gethiddenproperty(instance: Instance, property: string): (any, boolean)
declare function sethiddenproperty(instance: Instance, property: string, value: any): boolean
declare function setscriptable(instance: Instance, property: string, state: boolean): boolean?
declare function setthreadidentity(identity: number): () 
declare function getthreadidentity(): number 

--// scripts 
declare function getcallingscript(): LocalScript | Script     
declare function getloadedmodules(): {}
declare function getrunningscripts(): {}
declare function getscriptbytecode(script: LocalScript | ModuleScript): string?
declare function getscriptclosure(script: LocalScript | ModuleScript): Func?
declare function getscripthash(script: LocalScript | ModuleScript): string?
declare function getscripts(): {}
declare function getsenv(script: LocalScript | ModuleScript ): {[any]: any}

--// signals
type connectionObject = {
    Enabled: boolean,
    ForeignState: boolean,
    LuaConnection: boolean,
    Function: Func?,
    Threads: thread?,

    Fire: Func,
    Disconnect: () -> (),
    Disable: () -> (), 
    Enable: () -> (),
    Defer: Func
}
 

declare function firesignal(signal: RBXScriptSignal, ...: any?): ()
declare function getconnections(signal: RBXScriptSignal):  { connectionObject }
declare function replicatesignal(signal: RBXScriptSignal, ...: any?): ()
declare function cansignalreplicate(signal: RBXScriptSignal): boolean

--// Websocket
type websocketEvents = {
	OnMessage: RBXScriptSignal<string>,
	OnClose: RBXScriptSignal<string>,
    Send: (message: string | buffer) -> (),
    Close: () -> (), 
}

declare WebSocket: {
    connect: (url: string) -> websocketEvents
}
