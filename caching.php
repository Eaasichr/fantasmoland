<?php
$url = "http://www.odaa.dk/api/action/datastore_search?resource_id=2a82a145-0195-4081-a13c-b0e587e9b89c";
$json = file_get_contents($url);
$json_data = json_decode($json, true);
echo $json;

file_put_contents('/fantasmoland/data/parking.json', $json);
?>