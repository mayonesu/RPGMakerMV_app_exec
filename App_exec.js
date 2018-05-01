//=============================================================================
// App_exec.js	2018/04/30
// Version : 1.00
//=============================================================================

/*:
 * @plugindesc ゲーム外アプリ実行プラグイン(Windows用)
 * @author 堕天使マヨネーズ (horizonmayone)
 *
 * @help 絶対パス(フルパス)の場合は、コマンドをfullpassにしてください。
 * 例：fullpass C:/..(割愛)/example/example.exe
 *
 * 相対パス(ゲームプロジェクト内のindex.htmlがあるフォルダが始点になります)
 * の場合は、コマンドをrelativepassにしてください。
 * 例： relativepass example/example.exe
 *
 * この場合ではC:/..(割愛)/ゲーム名/example/example.exeとなります。
 * アプリをタスクキルしたい場合はコマンドをtaskkillにしてください。
 * 例：taskkill example.exe
 *
 * どのコマンドもスペースが入っているタスクやフォルダに対応しています。
 *
 * アプリ実行時、コマンドラインを必要とする場合は、ディレクトリ指定後、
 * 半角スペースとoption:を入れてコマンドラインを追加してください
 * ※絶対パス、相対パス共通です。
 * 例：relativepass example/example.exe option:-a -b -c -d example
 *
 */

(function(_global){
    var childProcess = require('child_process');
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    var dir = String();
    var com = String();
    Game_Interpreter.prototype.pluginCommand = function (command, args){
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'fullpass') {
            dir = "";
            if(args.length == 1){
                dir = "\"" + args + "\"";
            }
            else{
                dir = "\"";
                for(var i = 0; i < args.length; i++){
                    if(i == args.length -1){
                        dir += args[i];
                    }
                    else{
                        dir += args[i] + " ";
                    }
                    if(dir.indexOf('option:') !== -1){
                        option = 1;
                        dir = dir.replace(" " + args[i], '');
                        args[i] = args[i].replace('option:', '');
                        dir += "\" ";
                        for(var fo = i; fo < args.length; fo++){
                            dir += args[fo] + " ";
                        }
                        for(var fsh = j; fsh < args.length - 1; fsh++){
                            dir = dir.replace(" " + args[args.length - fsh], "");
                        }
                    }
                }
                if(option == 0) dir += "\"";
            }
            childProcess.exec(dir, function(error, stdout, stderr) {
                console.log(error)
            });
        }
        else if(command === 'relativepass') {
            var path = require('path');
            var projectBase  = path.dirname(process.mainModule.filename);;
            var option = 0;
            if(args.length == 1){
                dir = projectBase + "/";
                dir += args;
            }
            else{
                dir = "\"" + projectBase + "/";
                for(var j = 0; j < args.length; j++){
                    if(j == args.length -1){
                        dir += args[j];
                    }
                    else{
                        dir += args[j] + " ";
                    }
                    if(dir.indexOf('option:') !== -1){
                        option = 1;
                        dir = dir.replace(" " + args[j], '');
                        args[j] = args[j].replace('option:', '');
                        dir += "\" ";
                        for(var ro = j; ro < args.length; ro++){
                            dir += args[ro] + " ";
                        }
                        for(var rsh = j; rsh < args.length - 1; rsh++){
                            dir = dir.replace(" " + args[args.length - rsh], "");
                        }
                    }
                }
                if(option == 0) dir += "\"";
            }
            childProcess.exec(dir, function(error, stdout, stderr) {
                console.log(error);
            });
        }
        else if(command === 'taskkill'){
            com = "taskkill /F /T /IM \"";
            for(k = 0; k < args.length; k ++){
                if(k == args.length - 1){
                    com += args[k];
                }
                else{
                    com += args[k] + " ";
                }
            }
            com += "\"";
            childProcess.exec(com, function(error, stdout, stderr) {
                console.log(error);
            });
        }
        else;
  　};
})(this);