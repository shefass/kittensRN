# Kittens rules world!
My first React Native App!!!<br>
It was done using expo.io tools.

This app shows random kittens with random names.<br>
Kittens taken from: https://placekitten.com/ <br>

## Instalation
Download [apk file](https://github.com/shefass/kittensRN/blob/master/kittensRN-4e1b003c61c741dd800d4ff0322b759d-signed.apk?raw=true), and install directly to your mobile phone or: <br>
Clone repository: ```git clone https://github.com/shefass/kittensRN.git``` <br>
Install Node dependencys: ```npm install```<br>
Run expo server: ```npm start```<br>
It will open web browser with the qr code. Scan it with an expo.io app.<br>

### Usage
After load use slide to render more random kittens.<br>
Push on kitten name and you will see details of that kitten.<br>
Push the button and you will see details of first kitten. <br>

### How it works
At first it shows the Splash Screen and do internet connection check. <br>
At load stage it fetches to phone memory (cash) 100 pictures (by doing async 100 api calls).<br>
After load it shows Header, Button, Slider and one kitten.<br>
When you use the slider it changes internal state and shows you it.<br>
When you release slider, function generetes random list of kitten names and pictures.<br>
When app maps it to FlatList.<br>
When you click the name, name pass data to other screen and that screen renders by it the kitten.<br> 
You can look to demo [here](http://www.appdemostore.com/demo?id=4662195351715840)
