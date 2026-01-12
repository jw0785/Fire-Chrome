# Fire Chrome
Make Firefox look proper
## Find profile folder
under `about:support` click **Open Folder** in row **profile folder**
## set up symlink
use `ln` or `ln.exe` on windows
### (alternatively)Drop files
- drop `user.js` in this dir
- create **chrome** dir if it doesn't exist, drop both css into **chrome**
## Before and After
<table>
    <tr>
        <td width="50%">
            <p align="center"><strong>Default Firefox</strong></p>
            <img src="doc/before.png" alt="Default Firefox">
        </td>
        <td width="50%">
            <p align="center"><strong>Fire Chrome</strong></p>
            <img src="doc/after.png" alt="Fire Chrome">
        </td>
    </tr>
    <tr>
        <td width="30%">
            <p align="center"><strong>Default Firefox</strong></p>
            <img src="doc/default_context.png" alt="Default Firefox">
        </td>
        <td width="70%">
            <p align="center"><strong>Fire Chrome</strong></p>
            <img src="doc/fixed_context.png" alt="Fire Chrome">
        </td>
    </tr>
</table>