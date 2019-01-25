$(document).ready(function(){ ~ });の記述の意味
　　　→HTML（DOM)がすべて読み込まれてからfunction()の処理を実行する。
　現在は省略して$(function(){〜});と表記することが推奨されている。

$(‘#btn-evaluation’).click(function() { ~ });の記述の意味
　　　→<label class="btn btn-primary" id="btn-evaluation">ランク</label>のボタンがクリックされたとき、(function() { ~ });の処理を実行する。

$(‘#national_language, #english, #mathematics, #science, #society’).change(function() { ~ });の記述の意味
　　　→id名が national_language, english, mathematics, science, societyの箇所の内容が変更された時、.change(function() { ~ });の処理が実行される。

$(‘#national_language’).val()の記述の意味
　　　→<input type="number" id="national_language" value=0></p>のフォームに入力された内容を取得する。

Number()の記述の意味
　　　→値を数値に変換し取得する。

$(“#sum_indicate”).text(sum);の記述の意味
　　　→sumの値を取得し、<label id="sum_indicate"></label></p>に、テキストで追加する。

.appendの記述の意味
　　　→対象の要素の末尾にコンテンツ(テキスト文字やHTML要素)を挿入する