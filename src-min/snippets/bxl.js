define("ace/snippets/bxl",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='# scope: bxl\n\n# math agent\n\nsnippet math.floor\n	floor(${1:2.3})\n\nsnippet math.ceil\n	ceil(${1:2.3})\n\nsnippet math.round\n	round(${1:2.3})\n\nsnippet math.random\n	random()\n\nsnippet math.randomInt\n	random{\n		/int = ${1:6};\n	}\n\nsnippet math.randomLong\n	random{\n		/long = ${1:6};\n	}\n\n# is agent\n\nsnippet is.module\n	module(${1})\n\nsnippet is.subNodes\n	subNodes(${1})\n\nsnippet is.typeBoolean\n	typeBoolean(${1})\n\nsnippet is.typeDate\n	typeDate(${1})\n\nsnippet is.typeDatetime\n	typeDatetime(${1})\n\nsnippet is.typeDouble\n	typeDouble(${1})\n\nsnippet is.typeDecimal\n	typeDecimal(${1})\n\nsnippet is.typeInt\n	typeInt(${1})\n\nsnippet is.typeLong\n	typeLong(${1})\n\nsnippet is.typeNode\n	typeNode(${1})\n\nsnippet is.typeString\n	typeString(${1})\n\nsnippet is.typeTime\n	typeTime(${1})\n\nsnippet is.typeValueNN\n	typeValueNN(${1})\n\nsnippet is.valueNE\n	valueNE(${1})\n\nsnippet is.valueDatetime\n	valueDatetime(${1})\n\nsnippet is.valueDate\n	valueDate(${1})\n\nsnippet is.valueTime\n	valueTime(${1})\n\nsnippet is.valueBoolean\n	valueBoolean(${1})\n\nsnippet is.valueDouble\n	valueDouble(${1})\n\nsnippet is.valueDoubleNZ\n	valueDoubleNZ(${1})\n\nsnippet is.valueDecimal\n	valueDecimal(${1})\n\nsnippet is.valueInt\n	valueInt(${1})\n\nsnippet is.valueIntNZ\n	valueIntNZ(${1})\n\nsnippet is.valueLong\n	valueLong(${1})\n\nsnippet is.valuePathNE\n	valuePathNE(${1})\n\nsnippet is.valueString\n	valueString(${1})\n\nsnippet is.valueStringNE\n	valueStringNE(${1})\n\n# path agent\n\nsnippet path.items\n	items(${1})\n\nsnippet path.join\n	join(${1})\n\nsnippet path.key\n	key(${1})\n\nsnippet path.length\n	length(${1})\n\nsnippet path.pathToTreeFocus\n	pathToTreeFocus(${1})\n\nsnippet path.treeFocusToPath\n	treeFocusToPath(${1})\n\nsnippet path.split\n	split{\n		/path = ${1};\n		/key = ${2};\n	}\n\nsnippet path.keyAt\n	keyAt{\n		/path = ${1};\n		/index = ${2};\n	}\n\nsnippet path.keyLast\n	keyLast(${1})\n\nsnippet path.subPath\n	subPath{\n		/path = ${1};\n		/beginIndex = ${2};\n		/endIndex = ${3};\n	}\n\nsnippet path.tail\n	tail(${1})\n\nsnippet path.val\n	val(${1})\n\nsnippet path.keyDelete\n	keyDelete{\n		/path = ${1};\n		/key = ${2};\n	}\n\n# date agent\n\nsnippet date.add\n	add{\n		/datetime = ${1};\n		/year = ${2};\n		/month = ${3};\n		/day = ${4};\n		/hour = ${5};\n		/minute = ${6};\n		/second = ${7};\n	}\n\nsnippet date.dateToStruct\n	dateToStruct(${1})\n\nsnippet date.datetimeToStruct\n	datetimeToStruct(${1})\n\nsnippet date.now\n	now()\n\nsnippet date.parseDatetime\n	parseDatetime(${1})\n\nsnippet date.parseDate\n	parseDate(${1})\n\nsnippet date.parseTime\n	parseTime(${1})\n\n# tree agent\n\nsnippet tree.add\n	add{\n		/tree = ${1};\n		/add = ${2};\n	}\n\nsnippet tree.count\n	count(${1})\n\nsnippet tree.dumpToBxl\n	dumpToBxl(${1})\n\nsnippet tree.dumpToString\n	dumpToString(${1})\n\nsnippet tree.keyDelete\n	keyDelete{\n		/tree = ${1};\n		/key = ${2};\n	}\n\nsnippet tree.keyFirst\n	keyFirst(${1})\n\nsnippet tree.keyLast\n	keyLast(${1})\n\nsnippet tree.keyMoveDown\n	keyMoveDown{\n		/tree = ${1};\n		/key = ${2};\n		/cycle = true;\n	}\n\nsnippet tree.keyMoveUp\n	keyMoveUp{\n		/tree = ${1};\n		/key = ${2};\n		/cycle = true;\n	}\n\nsnippet tree.keyNext\n	keyNext{\n		/tree = ${1};\n		/key = ${2};\n		/cycle = true;\n	}\n\nsnippet tree.keyPos\n	keyPos{ \n		/tree = ${1};\n		/key = ${2};\n	}\n\nsnippet tree.keysDelete\n	keysDelete{\n		/tree = ${1};\n		/keys{\n			${2}\n		};\n	}\n\nsnippet tree.pathDelete\n	pathDelete{\n		/tree = ${1};\n		/path = ${2};\n	}\n\nsnippet tree.reverse\n	reverse(${1});\n\nsnippet tree.subtree\n	subtree{\n		/tree = ${1};\n		/beginIndex = ${2};\n		/endIndex = ${3};\n	}\n\nsnippet tree.keyInsert\n	keyInsert{\n		/tree = ${1};\n		/key = ${2};\n		/addTree = ${3};\n		/afterKey = ${4};\n	}\n\n# str agent\n\nsnippet str.base64decode\n	base64decode(${1:"QlhM"})\n\nsnippet str.base64encode\n	base64encode(${1:"Hello World!"})\n\nsnippet str.contains\n	contains{\n		/string = ${1:"hello world"};\n		/substring = ${2:"ello"};\n		/ignoreCase = true;\n	}\n\nsnippet str.endsWith\n	endsWith{\n		/string = ${1:"Hello"};\n		/suffix= ${2:"lo"};\n	}\n\nsnippet str.extractDiacritics\n	extractDiacritics(${1:"h\u00e9\u013e\u013a\u00f3 w\u00f4\u0159l\u010f"})\n\nsnippet str.format\n	format{\n		/string = ${1:"Hello %%name%%"};\n		/params{\n			${2:/name = "World"}\n		};\n	}\n\nsnippet str.find\n	find{ \n		/string = ${1:"hello world"}; \n		/regex = ${2:"[a-z]"}; \n	}\n\nsnippet str.hashMD5\n	hashMD5(${1:"Hello World"})\n\nsnippet str.hashSHA1\n	hashSHA1(${1:"Hello World"})\n\nsnippet str.htmlEncode\n	htmlEncode(${1})\n\nsnippet str.initCap\n	initCap(${1})\n\nsnippet str.join\n	join{\n		/strings = ${1};\n		/delimiter = ${2};\n	}\n\nsnippet str.length\n	length(${1:"Hello World"})\n\nsnippet str.justify\n	justify{\n		/string = ${1};\n		/length = ${2};\n		/char = ${3};\n		/type/center = ${4:true};\n	}\n\nsnippet str.replace\n	replace{\n		/string = ${1:"Hello World"};\n		/regex = ${3:"World"};\n		/replacement = ${2:"BXL"};\n	}\n\nsnippet str.split\n	split{\n		/string = ${1:"Hello World"};\n		/regex = ${2:" "};\n	}\n\nsnippet str.replaceParams\n	replaceParams{\n		/string = ${1:"Hello %%param%%"};\n		/params{\n			/${2:param} = ${3:"world"};\n		};\n	}\n\nsnippet str.substring\n	substring{\n		/string = ${1:"Hello World"};\n		/beginIndex = ${2:0};\n		/endIndex = ${3:4};\n	}\n\nsnippet str.toLowerCase\n	toLowerCase(${1:"HELLO WORLD"})\n\nsnippet str.toUpperCase\n	toUpperCase(${1:"hello world"})\n\nsnippet str.trim\n	trim(${1:"   hello world   "})\n\nsnippet str.startsWith\n	startsWith{\n		/string = ${1:"Hello World"};\n		/prefix= ${2:"Hell"};\n	}\n\n# server agent\n\nsnippet server.getParam\n	getParam(${1})\n\nsnippet server.session\n	session.read{\n		/context[${1:in/urlContext}] = null;\n	}\n\nsnippet server.session.write\n	session.write{\n		/context[${1:in/urlContext}] = null;\n		/tree = ${2:tmp/tree};\n	}\n\n# lang agent\n\nsnippet java\n	java{\n		/class = "${1:sk.jumpsoft.blox.extension.ExtensionPackage.ExtensionClass}";\n		/input{\n			/parameter = ${2:"value"};\n		};\n	}\n\n# ide agent\n\nsnippet ide.createInstance\n	createInstance{\n		/typePath${1:app/meh} = null;\n		/config = tmp/config; // optional\n	}\n\nsnippet ide.getConfigType\n	getConfigType(${1:tmp/config})\n\nsnippet ide.getModuleType\n	getModuleType(${1:tmp/config})\n\nsnippet ide.isNewIde\n	isNewIde()\n\nsnippet ide.moduleInstanceOfPath\n	moduleInstanceOfPath{\n		/module = ${1:tmp/module};\n		/parent = ${2:tmp/parent};\n	}\n\nsnippet ide.moduleTypeOfPath\n	moduleTypeOfPath{\n		/module = ${1:tmp/module};\n		/typePath = ${2:tmp/typePath};\n	}\n\nsnippet ide.pathInstanceOfPath\n	pathInstanceOfPath{\n		/module = ${1:tmp/module};\n		/parent = ${2:tmp/parent};\n	}\n\nsnippet ide.registerCode\n	registerCode{\n		/app = tmp/app;\n		/lib = tmp/lib; // only one\n	}\n\n\n# if else\nsnippet ifelse\n	if (${1:true}) {\n		${2}\n	} else {\n		${0}\n	}\n\n# for\nsnippet for\n	for (${1:in}) {\n		${2:out}[forkey] = forval;\n	}\n\n# while\nsnippet while\n	${1:tmp/i} = 0;\n	while (${1} < ${2:10}) {\n		${3:// code}\n		${1} = ${1} + 1;\n	}\n\nsnippet tryCatch\n	try{\n	  throw/${1:exception}{\n	    /message = "Additional message";\n	  };\n	} catch/$1 {\n	  log(loc/message);\n	}\n\nsnippet switch\n	switch(${1:tmp/greeting}) {\n	  case "${2:hello}":\n	    ${3:// code}\n	    break;\n	  default:\n	  	${4:// code}\n	  	break;\n	}\n\n# module operation call\nsnippet $\n	\\$${1:module}.${2:operation}{\n		${3}\n	};\n\nsnippet _formMessages\n	/messsages[]{\n		/type/${1:warning} = null;\n		/message = ${2:"Message goes here."};\n		/reasons[]{\n			/message = ${3:"Optional reason goes here."}\n		};\n	}\n\nsnippet _dataConditions\n	/conds[]{\n		/name = ${1:"name"};\n		/condType/${2:equal} = null;\n		/valueType/${3:string} = null;\n		/value = ${4:"hello world"};\n	};\n\nsnippet _dataOrders\n	/orders[]{\n		/name = ${1:"name"};\n		/orderType/desc = true;\n	};\n\nsnippet _dataRange\n	/range{\n		/countAll = false;\n	};\n\nguard tmp/listOutput\\s*\ntrigger =\\s*\nsnippet _lO\n	= \\$${1:tmp/datatype}.list{\n		${2:_dataRange}\n		${3:_dataConditions}\n		${4:_dataOrders}\n	};\n\n	if (!tmp/listOutput/ok) {\n		warning("Cannot perform \\"list\\" operation on datatype.");\n		return;\n	}\n\nguard tmp/addOutput\\s*\ntrigger =\\s*\nsnippet _aO\n	= \\$${1:tmp/datatype}.add{\n		/addID = ${2:23};\n		/addData = ${3:tmp/data};\n		/addOptions/canUpdateRecord = null;\n	};\n\n	if (!tmp/addOutput/ok) {\n		warning("Cannot perform \\"add\\" operation on datatype.");\n		return;\n	}\n\nguard tmp/updateOutput\\s*\ntrigger =\\s*\nsnippet _uO\n	= \\$${1:tmp/datatype}.update{\n		/updateID = ${2:23};\n		/updateData = ${3:tmp/data};\n		/updateOptions/canNotExist/canAddRecord = null;\n		${4:_dataConditions}\n	};\n\n	if (!tmp/updateOutput/ok) {\n		warning("Cannot perform \\"update\\" operation on datatype.");\n		return;\n	}\n\nguard tmp/deleteOutput\\s*\ntrigger =\\s*\nsnippet _dO\n	= \\$${1:tmp/datatype}.delete{\n		/deleteID = ${2:23};\n		/deleteOptions/canNotExist = null;\n		${4:_dataConditions}\n	};\n\n	if (!tmp/deleteOutput/ok) {\n		warning("Cannot perform \\"delete\\" operation on datatype.");\n		return;\n	}\n\nguard tmp/readOutput\\s*\ntrigger =\\s*\nsnippet _rO\n	= \\$${1:tmp/datatype}.read{\n		/readID = ${2:23};\n		/readOptions/canNotExist = null;\n		${4:_dataConditions}\n	};\n\n	if (!tmp/readOutput/ok) {\n		warning("Cannot perform \\"read\\" operation on datatype.");\n		return;\n	}',t.scope="bxl"})