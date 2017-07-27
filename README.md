# Language-Translator
Translate from one language to another by just selecting a file and the language to be translated into

To translate, you need to edit some code in the file.
-In place of "english.txt", put in your filename which you want to translate. That file must exist in the same directory in which you copy the inter.js file and contain the data you want to translate.
-In place of "chinese.txt", enter the name of the file you want the output in. It need not exist by default.
-Find {from: 'en', to: 'zh-cn'}. Edit it according to your need.

After this, open a terminal and migrate to the project directory. Then run the command "npm i express google-translate-api".
The setup is now ready. Run the file using command "node inter.js". Open a browser and enter the address "localhost:4300". You will now find a new file with the translation in the project folder.
