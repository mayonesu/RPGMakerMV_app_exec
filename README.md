# RPGMakerMV_app_exec
# ゲーム外アプリ実行プラグイン(Windows用)

## Description
RPGツクールMVのゲーム外で他アプリの実行またはタスクキルをするためのプラグインです。

## Usage
絶対パス(フルパス)の場合は、プラグインコマンドをfullpassにしてください。

例：fullpass C:/..(割愛)/example/example.exe

相対パス(ゲームプロジェクト内のindex.htmlがあるフォルダが始点になります)
の場合は、プラグインコマンドをrelativepassにしてください。

例： relativepass example/example.exe

この場合ではC:/..(割愛)/ゲーム名/example/example.exeとなります。
アプリをタスクキルしたい場合はプラグインコマンドをtaskkillにしてください。

例：taskkill example.exe

どのコマンドもスペースが入っているタスクやフォルダに対応しています。

アプリ実行時、コマンドラインを必要とする場合は、ディレクトリ指定後、
半角スペースとoption:を入れてコマンドラインを追加してください

※絶対パス、相対パス共通です。

例：relativepass example/example.exe option:-a -b -c -d example

## Install
ゲームプロジェクト内のjs/pluginsに入れて、プラグイン管理からApp_execをONにしてください。

## Author
堕天使マヨネーズ Twitter(https://twitter.com/horizonmayone)
