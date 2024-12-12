-- This is a generated file. DO NOT EDIT!

assert(require("jit").version == "LuaJIT 2.1.1732813678", "LuaJIT core/library version mismatch")

return {

bcnames = "ISLT  ISGE  ISLE  ISGT  ISEQV ISNEV ISEQS ISNES ISEQN ISNEN ISEQP ISNEP ISTC  ISFC  IST   ISF   ISTYPEISNUM MOV   NOT   UNM   LEN   ADDVN SUBVN MULVN DIVVN MODVN ADDNV SUBNV MULNV DIVNV MODNV ADDVV SUBVV MULVV DIVVV MODVV POW   CAT   KSTR  KCDATAKSHORTKNUM  KPRI  KNIL  UGET  USETV USETS USETN USETP UCLO  FNEW  TNEW  TDUP  GGET  GSET  TGETV TGETS TGETB TGETR TSETV TSETS TSETB TSETM TSETR CALLM CALL  CALLMTCALLT ITERC ITERN VARG  ISNEXTRETM  RET   RET0  RET1  FORI  JFORI FORL  IFORL JFORL ITERL IITERLJITERLLOOP  ILOOP JLOOP JMP   FUNCF IFUNCFJFUNCFFUNCV IFUNCVJFUNCVFUNCC FUNCCW",

irnames = "LT    GE    LE    GT    ULT   UGE   ULE   UGT   EQ    NE    ABC   RETF  NOP   BASE  PVAL  GCSTEPHIOP  LOOP  USE   PHI   RENAMEPROF  KPRI  KINT  KGC   KPTR  KKPTR KNULL KNUM  KINT64KSLOT BNOT  BSWAP BAND  BOR   BXOR  BSHL  BSHR  BSAR  BROL  BROR  ADD   SUB   MUL   DIV   MOD   POW   NEG   ABS   LDEXP MIN   MAX   FPMATHADDOV SUBOV MULOV AREF  HREFK HREF  NEWREFUREFO UREFC FREF  TMPREFSTRREFLREF  ALOAD HLOAD ULOAD FLOAD XLOAD SLOAD VLOAD ALEN  ASTOREHSTOREUSTOREFSTOREXSTORESNEW  XSNEW TNEW  TDUP  CNEW  CNEWI BUFHDRBUFPUTBUFSTRTBAR  OBAR  XBAR  CONV  TOBIT TOSTR STRTO CALLN CALLA CALLL CALLS CALLXSCARG  ",

irfpm = { [0]="floor", "ceil", "trunc", "sqrt", "log", "log2", "other", },

irfield = { [0]="str.len", "func.env", "func.pc", "func.ffid", "thread.env", "tab.meta", "tab.array", "tab.node", "tab.asize", "tab.hmask", "tab.nomm", "udata.meta", "udata.udtype", "udata.file", "sbuf.w", "sbuf.e", "sbuf.b", "sbuf.l", "sbuf.ref", "sbuf.r", "cdata.ctypeid", "cdata.ptr", "cdata.int", "cdata.int64", "cdata.int64_4", },

ircall = {
[0]="lj_str_cmp",
"lj_str_find",
"lj_str_new",
"lj_strscan_num",
"lj_strfmt_int",
"lj_strfmt_num",
"lj_strfmt_char",
"lj_strfmt_putint",
"lj_strfmt_putnum",
"lj_strfmt_putquoted",
"lj_strfmt_putfxint",
"lj_strfmt_putfnum_int",
"lj_strfmt_putfnum_uint",
"lj_strfmt_putfnum",
"lj_strfmt_putfstr",
"lj_strfmt_putfchar",
"lj_buf_putmem",
"lj_buf_putstr",
"lj_buf_putchar",
"lj_buf_putstr_reverse",
"lj_buf_putstr_lower",
"lj_buf_putstr_upper",
"lj_buf_putstr_rep",
"lj_buf_puttab",
"lj_bufx_set",
"lj_bufx_more",
"lj_serialize_put",
"lj_serialize_get",
"lj_serialize_encode",
"lj_serialize_decode",
"lj_buf_tostr",
"lj_tab_new_ah",
"lj_tab_new1",
"lj_tab_dup",
"lj_tab_clear",
"lj_tab_newkey",
"lj_tab_keyindex",
"lj_vm_next",
"lj_tab_len",
"lj_tab_len_hint",
"lj_gc_step_jit",
"lj_gc_barrieruv",
"lj_mem_newgco",
"lj_prng_u64d",
"lj_vm_modi",
"log10",
"exp",
"sin",
"cos",
"tan",
"asin",
"acos",
"atan",
"sinh",
"cosh",
"tanh",
"fputc",
"fwrite",
"fflush",
"lj_vm_floor",
"lj_vm_ceil",
"lj_vm_trunc",
"sqrt",
"log",
"lj_vm_log2",
"pow",
"atan2",
"ldexp",
"lj_vm_tobit",
"softfp_add",
"softfp_sub",
"softfp_mul",
"softfp_div",
"softfp_cmp",
"softfp_i2d",
"softfp_d2i",
"lj_vm_sfmin",
"lj_vm_sfmax",
"lj_vm_tointg",
"softfp_ui2d",
"softfp_f2d",
"softfp_d2ui",
"softfp_d2f",
"softfp_i2f",
"softfp_ui2f",
"softfp_f2i",
"softfp_f2ui",
"fp64_l2d",
"fp64_ul2d",
"fp64_l2f",
"fp64_ul2f",
"fp64_d2l",
"fp64_d2ul",
"fp64_f2l",
"fp64_f2ul",
"lj_carith_divi64",
"lj_carith_divu64",
"lj_carith_modi64",
"lj_carith_modu64",
"lj_carith_powi64",
"lj_carith_powu64",
"lj_cdata_newv",
"lj_cdata_setfin",
"strlen",
"memcpy",
"memset",
"lj_vm_errno",
"lj_carith_mul64",
"lj_carith_shl64",
"lj_carith_shr64",
"lj_carith_sar64",
"lj_carith_rol64",
"lj_carith_ror64",
},

traceerr = {
[0]="error thrown or hook called during recording",
"trace too short",
"trace too long",
"trace too deep",
"too many snapshots",
"blacklisted",
"retry recording",
"NYI: bytecode %s",
"leaving loop in root trace",
"inner loop in root trace",
"loop unroll limit reached",
"bad argument type",
"JIT compilation disabled for function",
"call unroll limit reached",
"down-recursion, restarting",
"NYI: unsupported variant of FastFunc %s",
"NYI: return to lower frame",
"store with nil or NaN key",
"missing metamethod",
"looping index lookup",
"NYI: mixed sparse/dense table",
"symbol not in cache",
"NYI: unsupported C type conversion",
"NYI: unsupported C function type",
"guard would always fail",
"too many PHIs",
"persistent type instability",
"failed to allocate mcode memory",
"machine code too long",
"hit mcode limit (retrying)",
"too many spill slots",
"inconsistent register allocation",
"NYI: cannot assemble IR instruction %d",
"NYI: PHI shuffling too complex",
"NYI: register coalescing too complex",
},

ffnames = {
[0]="Lua",
"C",
"assert",
"type",
"next",
"pairs",
"ipairs_aux",
"ipairs",
"getmetatable",
"setmetatable",
"getfenv",
"setfenv",
"rawget",
"rawset",
"rawequal",
"unpack",
"select",
"tonumber",
"tostring",
"error",
"pcall",
"xpcall",
"loadfile",
"load",
"loadstring",
"dofile",
"gcinfo",
"collectgarbage",
"newproxy",
"print",
"coroutine.status",
"coroutine.running",
"coroutine.isyieldable",
"coroutine.create",
"coroutine.yield",
"coroutine.resume",
"coroutine.wrap_aux",
"coroutine.wrap",
"math.abs",
"math.floor",
"math.ceil",
"math.sqrt",
"math.log10",
"math.exp",
"math.sin",
"math.cos",
"math.tan",
"math.asin",
"math.acos",
"math.atan",
"math.sinh",
"math.cosh",
"math.tanh",
"math.frexp",
"math.modf",
"math.log",
"math.atan2",
"math.pow",
"math.fmod",
"math.ldexp",
"math.min",
"math.max",
"math.random",
"math.randomseed",
"bit.tobit",
"bit.bnot",
"bit.bswap",
"bit.lshift",
"bit.rshift",
"bit.arshift",
"bit.rol",
"bit.ror",
"bit.band",
"bit.bor",
"bit.bxor",
"bit.tohex",
"string.byte",
"string.char",
"string.sub",
"string.rep",
"string.reverse",
"string.lower",
"string.upper",
"string.dump",
"string.find",
"string.match",
"string.gmatch_aux",
"string.gmatch",
"string.gsub",
"string.format",
"table.maxn",
"table.insert",
"table.concat",
"table.sort",
"table.new",
"table.clear",
"io.method.close",
"io.method.read",
"io.method.write",
"io.method.flush",
"io.method.seek",
"io.method.setvbuf",
"io.method.lines",
"io.method.__gc",
"io.method.__tostring",
"io.open",
"io.popen",
"io.tmpfile",
"io.close",
"io.read",
"io.write",
"io.flush",
"io.input",
"io.output",
"io.lines",
"io.type",
"os.execute",
"os.remove",
"os.rename",
"os.tmpname",
"os.getenv",
"os.exit",
"os.clock",
"os.date",
"os.time",
"os.difftime",
"os.setlocale",
"debug.getregistry",
"debug.getmetatable",
"debug.setmetatable",
"debug.getfenv",
"debug.setfenv",
"debug.getinfo",
"debug.getlocal",
"debug.setlocal",
"debug.getupvalue",
"debug.setupvalue",
"debug.upvalueid",
"debug.upvaluejoin",
"debug.sethook",
"debug.gethook",
"debug.debug",
"debug.traceback",
"jit.on",
"jit.off",
"jit.flush",
"jit.status",
"jit.security",
"jit.attach",
"jit.util.funcinfo",
"jit.util.funcbc",
"jit.util.funck",
"jit.util.funcuvname",
"jit.util.traceinfo",
"jit.util.traceir",
"jit.util.tracek",
"jit.util.tracesnap",
"jit.util.tracemc",
"jit.util.traceexitstub",
"jit.util.ircalladdr",
"jit.opt.start",
"jit.profile.start",
"jit.profile.stop",
"jit.profile.dumpstack",
"ffi.meta.__index",
"ffi.meta.__newindex",
"ffi.meta.__eq",
"ffi.meta.__len",
"ffi.meta.__lt",
"ffi.meta.__le",
"ffi.meta.__concat",
"ffi.meta.__call",
"ffi.meta.__add",
"ffi.meta.__sub",
"ffi.meta.__mul",
"ffi.meta.__div",
"ffi.meta.__mod",
"ffi.meta.__pow",
"ffi.meta.__unm",
"ffi.meta.__tostring",
"ffi.meta.__pairs",
"ffi.meta.__ipairs",
"ffi.clib.__index",
"ffi.clib.__newindex",
"ffi.clib.__gc",
"ffi.callback.free",
"ffi.callback.set",
"ffi.cdef",
"ffi.new",
"ffi.cast",
"ffi.typeof",
"ffi.typeinfo",
"ffi.istype",
"ffi.sizeof",
"ffi.alignof",
"ffi.offsetof",
"ffi.errno",
"ffi.string",
"ffi.copy",
"ffi.fill",
"ffi.abi",
"ffi.metatype",
"ffi.gc",
"ffi.load",
"buffer.method.free",
"buffer.method.reset",
"buffer.method.skip",
"buffer.method.set",
"buffer.method.put",
"buffer.method.putf",
"buffer.method.get",
"buffer.method.putcdata",
"buffer.method.reserve",
"buffer.method.commit",
"buffer.method.ref",
"buffer.method.encode",
"buffer.method.decode",
"buffer.method.__gc",
"buffer.method.__tostring",
"buffer.method.__len",
"buffer.new",
"buffer.encode",
"buffer.decode",
},

}

