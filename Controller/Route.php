<?
function get_content($url)
{
    $ch = curl_init();

    curl_setopt ($ch, CURLOPT_URL, $url);
    curl_setopt ($ch, CURLOPT_HEADER, 0);

    ob_start();

    curl_exec ($ch);
    curl_close ($ch);
    $string = ob_get_contents();

    ob_end_clean();

    return $string;

}
$content =$punktid;

$content = get_content("C:\Users\The Dog\IdeaProjects\I244 projekt\I244-projekt\View\yl1.html");
echo $content;


?>