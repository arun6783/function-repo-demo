
$currentDirectory = Get-Location

$buildArea  = "C:\dev\function-repo-demo\individual-repo\Build-Area"

Remove-Item $buildArea -Force -Recurse

md $buildArea


Get-ChildItem  -Filter  package.json -Recurse | Where {$_.FullName -notlike "*\node_modules\*"}  | Where {$_.FullName -notlike "*\Build-Area\*"} | % { 

   write-host "Now copying " $_.Directory -ForegroundColor Magenta

   $src =  $_.DirectoryName +"\*" 

   cd $currentDirectory

   Copy-Item -Recurse  $src  "C:\dev\function-repo-demo\individual-repo\Build-Area" -Force

   $newDir =  $buildArea + "\" 

   cd $newDir

   npm i
} 

 cd $buildArea

 Write-Host "now deploying to azure function app"

 func azure functionapp publish "http-trigger-demo"


 cd $currentDirectory

 Write-Host "successfully deployed to function app"