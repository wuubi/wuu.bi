---
id: microsoft-index
title: Microsoft Windows
tags:
  - OS
  - noter
  - Microsoft
  - Windows
---

## Microsoft Windows

### Find blank directories in Windows Powershell

```
$SomePath="D:\"
Get-ChildItem -Path $SomePath -Recurse -Directory | ForEach-Object -Process {
if ($false -eq $_.GetFileSystemInfos())
  {
  $_.FullName
  }
}$SomePath="D:\"
Get-ChildItem -Path $SomePath -Recurse -Directory | ForEach-Object -Process {
if ($false -eq $_.GetFileSystemInfos())
  {
  $_.FullName
  }
}
```