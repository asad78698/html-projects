
<?php


#GROUP NO: 16

#News Source: Al-Jazeera

#Member 1: Sayed iftikhar Hussain (36548), #Member 2: Syed wajeeh ul hasnain (35437), #Member 3: Waleed mumtaz mir (36335)


$ch = curl_init(); // we created curl function with chracter variable

curl_setopt($ch, CURLOPT_URL, 'https://www.aljazeera.com/news/2023/4/7/two-israeli-settlers-killed-3-wounded-in-west-bank-shooting'); // posting url in single quote to get the title of the webpage
curl_setopt($ch, CURLOPT_POST, false);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$html = curl_exec($ch);

curl_close($ch); //passing char variable in curl built in function 

$DOM = new DOMDocument;
libxml_use_internal_errors(true);   //detect if there are any error during scrapping

$DOM->loadHTML($html);

$elements = $DOM->getElementsByTagName('h1'); //targeting H1 tags since the title is written in H1 on webpage
                                               
//we can also change h1 to <p> or h2 or h3 tags to get the the content from the webpage

echo" Printing Title From Al-Jazeera News Post: <br> ";  // printing this string

echo"<br>";

for($i=0; $i<$elements->length; $i++){  

    echo $elements->item($i)->nodeValue."<br>";  // printing taget webpage title

}

?>


