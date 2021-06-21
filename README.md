# Helpage
One-Stop solution for clumsy bookmarks. Helpage lets you organize your custom bookmarks and most visited sites onto a basic HTML5 webpage.

## User end
We have planned the project in such a way that on the user-end you can add your own icons, websites, favorites and articles to read.
A less tedious approach could be that you can set helpage as your browser's default startup page, so you won't have to go through a bunch of folders to look for it.
A search bar has also been provided after personally using helpage 1.0 for months.

### Note:
The project is under-construction. Some of the functionalities might be unavailable/ won't work.


## **How to use Helpage?** *(Efficiently!!)*
1. Copy the link ```https://devanshuyadav.github.io/Helpage/```
2. Set this as your browser/s startup page.
3. You're Good to Go. 

Now everytime you open your browser, you'll have all your selected websites at one place.
<br/><br/>
*Chrome:*
![Chrome-Helpage](/images/helpageChrome.png)
*Brave:*
![Brave-Helpage](/images/helpageBrave.png)
<br/>
*Safari:*
![Safari-Helpage](/images/helpageSafari.png)
<br>
<br/>

---
<br/>

## 👷‍♂️**How to Personalize Helpage?**
1. [Fork]() the Repository.
2. Clone the Repository to your Local Environment.
3. Search for `<WELCOME MESSAGE>` in `/index.html` and Update Your Name there.
<br>
<br>

### Adding New Icon to the Page
1.  For Adding a new icon to Helpage, you'll need the following beforehand:
    - `LINK` to the Website you want to add.
    - An `IMAGE/SVG` for the Logo of the Concerned Website (or Any Relevant Reference Picture you want to have).
2. Upload the `IMAGE/SVG`, into `assets/` folder with an Appropriate Name *( let's call it ICON_1 for example )* and Extension *( .png, .jpg, .jpeg, .svg are some that'll work fine )*.
    - We'll need `assets/ICON_1.png` Later.
3. Once you've gathered everything listed above and added the Logo, Open `Index.html` and find `<ADD ICON HERE>`. 
    - You'll have to decide where exactly you want to add your new icon in the page & find exactly **that particular** `<ADD ICON HERE>` comment.
4. Copy and Paste the following lines of code ***JUST ABOVE*** the `<ADD ICON HERE>` Comment.

    ```
    <!-- <ADD ICON HERE> -->

    <!-- <INSERT NAME> -->

      <div class="col-sm-4 col-4 col-lg-2 col-md-3">
        <div class="icons dark-elem">
          <a href=" <ADD LINK HERE> " target="_blank">
            <img src="assets/<NAME OF IMAGE/SVG>" alt="<ALT TEXT>" height="100px">
          </a>
        </div>
      </div>
    ```
    Update the folllowing Values accordingly.
    - `<INSERT NAME>` : Name of Website You've Linked.
    - `<ADD LINK HERE>` : `LINK` to the Website.
    - `<NAME OF IMAGE/SVG>` : Name of The Logo Image/SVG file added to `assets/` folder ( say `ICON_1.png` )
    - `<ALT TEXT>` : Name of Website You've Linked.

  #### `👌 Icon Added Successfully `
<br>
<br>


### Deleting An Existing Icon On The Page
1. Find the `<ADD ICON HERE>` comment **Above and Below** the Icon you want to remove.
2. Delete everything in between the comments.
3. Remove Any **ONE** of the `<ADD ICON HERE>` comments. *( optional )*
#### `👍 Successfully Removed an Icon `
<br>
<br>

### Adding New Bookmark

1. Find `<ADD BOOKMARK HERE>` in `Index.html`.
2. Copy and Paste the following lines of code ***JUST ABOVE*** the `<ADD BOOKMARK HERE>` comment.

    ```
    <!-- <ADD BOOKMARK HERE> -->
    <a href="<ADD BOOKMARK LINK>" class="dropdown-item"><INSERT BOOKMARK NAME></a>
    ```
    Update the following values accordingly:
    - `<ADD BOOKMARK LINK>` : Link to the Bookmarked Website.
    - `<INSERT BOOKMARK NAME>` : Name of the Bookmarked site.
3. Additionally, if you want a Bookmark Divider, Paste `<div class="dropdown-divider"></div>` at the appropriate place.
#### `👌 Bookmark Added Successfully `
<br>
<br>

### Removing Existing Bookmarks...
1. Find the `<ADD BOOKMARK HERE>` comment **Above and Below** the Bookmark you want to remove.
2. Delete everything in between the comments.
3. Remove Any **ONE** of the `<ADD BOOKMARK HERE>` comments. *( optional )*
#### `👍 Successfully Removed a Bookmark `