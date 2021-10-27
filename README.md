# Helpage
One-Stop solution for clumsy bookmarks. Helpage lets you organize your custom bookmarks and most visited sites onto a basic HTML5 webpage.

***Helpage*** is a Webpage Designed with the intention to cut down the need for any regular browser's favorites tab. Moreover, It has bookmarks just similar to a regular browser. 

Helpage has been tried and tested over months of usage. It has witnessed Hundreds of ✅Changes, ⏫Upgrades, 📈Improvements and 🐞 Bug Fixes as and when Required. It's possible because of the collaborative 🤝 efforts of the team. 


# **How to use Helpage?** *(Efficiently!!)*
1. Copy the URL ```https://devanshuyadav.github.io/helpage/```
2. Go to your Browser/s settings.
3. Under ***'OnStartup'** (or any similar option)* , Select *'Open a Specific Page or set of pages'*.
4. Add New Page and Paste the Copied URL.
5. And, You're Good to Go. 👍

Now everytime you open your browser, you'll have all your selected websites at one place.
<br/><br/>

## Chrome:
![Chrome-Helpage](/images/helpageChrome.png)
## Brave:
![Brave-Helpage](/images/helpageBrave.png)
## Safari:
![Safari-Helpage](/images/helpageSafari.png)


# 👷‍♂️**How to Personalize Helpage?**

1. Fork the Repository.

2. Clone the Repository to your Local Environment.

3. Once the Repository has been cloned you have to open it in Git bash.

4. Create a branch specific to the issue you are working on.
   ```shell
   git checkout -b your-branch-name
   ```
   For clarity, name
   your branch `update-xxx` or `fix-xxx`. The `xxx` is a short description of the changes you're making. Examples include `update-readme` or `fix-typo-on-contribution-md`.

5. Open up the project in your favorite text editor, select the file you want to contribute to, and make your changes.

6. Add your modified files to Git.
   ```shell
   git add path/to/filename.ext
   ```
   You can also add all unstaged files using:
   ```shell
   git add .
   ```

   **Note:** using a `git add .` will automatically add all files. You can do a `git status` to see your changes, but do it **before** `git add`.

7. Commit your changes using a descriptive commit message.
   ```shell
   git commit -m "Brief Description of Commit"
   ```

8. Verify that the origin is your own forked branch and not the main repository.
   ```shell
   git remote --verbose
   ```

9. Push your commits to your GitHub Fork:
   ```shell
   git push -u origin your-branch-name
   ```

10. Submit a pull request.
Within GitHub, visit this main repository and you should see a banner suggesting that you make a pull request. While you're writing up the pull request, you can add `Closes #XXX` in the message body where `#XXX` is the issue number you're fixing. Therefore, an example would be `Closes #42` would close issue `#42`.
<br>
<br>


### Adding New Icon to the Page
1. In Order to add a new icon to Helpage, you'll need the following beforehand:
    - `LINK` to the Website you want to add.
    - An `IMAGE/SVG` for the Logo of the Concerned Website (or Any Relevant Reference Picture you want to have).
2. Upload the `IMAGE/SVG`, into `assets/` folder with an Appropriate Name *( let's call it ICON_1 for example )* and Extension *( **.png**, **.jpg**, **.jpeg**, **.svg** are some of the extension that'll work fine )*.
    - Your File should have a relative path similar to `assets/ICON_1.png` *(For Example)*.
3. Once you've gathered everything listed above and added the Logo
    - Open `Index.html` and find `<ADD ICON HERE>`. 
    - You'll have to decide where exactly you want to add your new icon in the page & find exactly **that particular** `<ADD ICON HERE>` comment.
4. Copy and Paste the following lines of code ***on the line JUST ABOVE*** the `<ADD ICON HERE>` Comment.

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
    - `<NAME OF IMAGE/SVG>` : Name of The Logo Image/SVG file added to `assets/` folder ( For this Example -  `ICON_1.png` )
    - `<ALT TEXT>` : Name of Website You've Linked.

  #### `👌 You've Successfully Added a New Icon!! `
<br>
<br>


### Deleting An Existing Icon On The Page
1. Find the `<ADD ICON HERE>` comments **Above and Below** the Icon you want to remove.
2. Delete everything in between the two comments.
3. Remove Any **ONE** of the `<ADD ICON HERE>` comments. *( Optional but Recommended )*
#### `👍 You've Successfully Removed an Icon. `
<br>
<br>

### Adding New Bookmark

1. Find `<ADD BOOKMARK HERE>` in `Index.html`.
2. Copy and Paste the following lines of code ***on the line JUST ABOVE*** the `<ADD BOOKMARK HERE>` comment.

    ```
    <!-- <ADD BOOKMARK HERE> -->
    <a href="<ADD BOOKMARK LINK>" class="dropdown-item"><INSERT BOOKMARK NAME></a>
    ```
    Update the following values accordingly:
    - `<ADD BOOKMARK LINK>` : Link to the Bookmarked Website.
    - `<INSERT BOOKMARK NAME>` : Name of the Bookmarked site.
3. Additionally, if you want a Bookmark Divider, Paste the following line at Required place.
    ```
    <div class="dropdown-divider"></div>
    ```
#### `👌 Bookmark Added Successfully `
<br>
<br>

### Removing Existing Bookmarks...
1. Find the `<ADD BOOKMARK HERE>` comment **Above and Below** the Bookmark you want to remove.
2. Delete everything in between the comments.
3. Remove Any **ONE** of the `<ADD BOOKMARK HERE>` comments. *( Optional but Recommended )*
#### `👍 Successfully Removed a Bookmark `