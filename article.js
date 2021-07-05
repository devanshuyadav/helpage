const domainsArr = document.querySelector('[data-domains]')
const articleArr = document.querySelector('.article-list')
const domainForm = document.querySelector('[data-domain-form]')
const articleForm = document.querySelector('[data-article-form]')
const newDomainInput = document.querySelector('[data-domain-input]')
const newArticleInput = document.querySelector('[data-article-input]')
const clearArticlesBtn = document.querySelector('[data-clear-task-btn]')
const articleDisplayContainer = document.querySelector('[data-article-display-container]')
const articleTitleDiv = document.querySelector('[data-article-title]')
const newArticleDiv = document.querySelector('[data-articleDiv]')


const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'article.selectedListId'
//megaArr = [{domainName:"ai" ,id:1, articlesArr=[]},{domainName: "cyber",id: 2, articlesArr: []}]
var megaArr;
if (localStorage.getItem('megaArr') == null) {
  megaArr = []
} else {
  megaArr = JSON.parse(localStorage.getItem('megaArr'));
}
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)


//*********************************************************EVENT LISTENERS********************************************************* */

document.addEventListener('DOMContentLoaded', getDomains)
document.addEventListener('DOMContentLoaded', displayArticleContainer)


domainForm.addEventListener('submit', e => {
  e.preventDefault()
  const domainName = newDomainInput.value
  if (domainName === '') {
    alert('add a domain')
    return
  }
  //create a MegaArrItem and add it to megaArr --> MegaArrItem is {domainName: domainName, id: date&time, articlesArr=[]}
  const domainObj = createDomainObject(domainName)
  megaArr.push(domainObj)
  addDomain(domainObj)
  newDomainInput.value = " ";
})

clearArticlesBtn.addEventListener('click', (e => {
  clearArticles()
}))


//EVENT DELEGATION --> selecting LI from domain's list
domainsArr.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.id
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
    //clear domain to avoid duplicacy 
    while (domainsArr.firstChild) {
      domainsArr.removeChild(domainsArr.firstChild)
    }
    //get domain list again 
    getDomains();
    console.log(`selectedListId: ${selectedListId}`)
    //display article container
    displayArticleContainer()
  }
})

//Add new article
articleForm.addEventListener("submit", e => {
  e.preventDefault()
  const articleName = newArticleInput.value
  if (articleName === '') {
    alert('enter article')
    return
  }
  //get selected domain
  const selectedDomain = megaArr.find(domainObj => domainObj.id === selectedListId)
  //push articleName into selected domain's articlesArr
  selectedDomain.articlesArr.push(articleName)
  //clear article container to avoid duplicacy
  while(articleArr.firstChild){
    articleArr.removeChild(articleArr.firstChild)
  }
  displayArticleContainer()
  storeMegaArrInLocalStorage()
  newArticleInput.value = ''
})

articleArr.addEventListener('click', e => {
  e.preventDefault()
  deleteArticle(e.target)
})


//*********************************************************FUNCTIONS********************************************************* */



function getDomains() {
  //for each DomainObj (already present when page loaded) create & append li
  megaArr.forEach(domainObj => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(domainObj.domainName))
    li.dataset.id = domainObj.id
    if (domainObj.id === selectedListId) {
      li.classList.add('active-domain')
    }
    domainsArr.appendChild(li)
  })
}



function addDomain(domainObj) {
  //create a domain li & append it
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(domainObj.domainName))
  li.dataset.id = domainObj.id
  //  if (domainObj.id === selectedListId){
  //    li.classList.add('active-domain')
  //  }
  domainsArr.appendChild(li)
  //save to LS 
  storeMegaArrInLocalStorage()
}

function storeMegaArrInLocalStorage() {
  //storing updated megaArr
  localStorage.setItem('megaArr', JSON.stringify(megaArr))
}


 
function createDomainObject(domainName) {
  return { id: Date.now().toString(), domainName: domainName, articlesArr: [] }
}


function clearArticles() {
  //updated megaArr
  megaArr = megaArr.filter(domainObj => domainObj.id !== selectedListId)
  //clear domain to avoid duplicacy 
  while (domainsArr.firstChild) {
    domainsArr.removeChild(domainsArr.firstChild)
  }
  selectedListId = null
  storeMegaArrInLocalStorage()
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
  //store & display updated array 
  getDomains()
}


function displayArticleContainer() {
  //get selected article
  const selectedDomain = megaArr.find(domainObj => domainObj.id === selectedListId)
  // if ntg selected -> display none
  if (selectedListId === null) {
    articleDisplayContainer.style.display = 'none'
    return
  } else {
    articleDisplayContainer.style.display = ''
    //display article title
    articleTitleDiv.innerHTML = selectedDomain.domainName
    //get and add article
    getArticles(selectedDomain)
  }
}



//get and add article
function getArticles(selectedDomain) {
  //clear article container to avoid duplicacy
  while(articleArr.firstChild){
    articleArr.removeChild(articleArr.firstChild)
  }
  selectedDomain.articlesArr.forEach(article => {
    //create div with class "article"
    const newArticle = document.createElement('div')
    newArticle.classList.add = "article"
    const newArticleli = document.createElement('li')
    newArticleli.classList.add = "article-li"
    //append text node
    newArticleli.appendChild(document.createTextNode(article))
    const trashBtn = document.createElement('button')
    trashBtn.classList.add("trash-btn")
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    //append trash-button to article-li 
    newArticleli.appendChild(trashBtn)
    //append li into div
    newArticle.appendChild(newArticleli)
    //append div into ui
    articleArr.appendChild(newArticle)
  })
}

function deleteArticle(target){ 
  if (target.classList[0] === "trash-btn"){
    const itemToBeDeleted = target.parentElement.parentElement;
    const articleToBeDeleted = itemToBeDeleted.firstChild.textContent;
    deleteFromLS(articleToBeDeleted)
    itemToBeDeleted.remove();
  }
}

function deleteFromLS(articleToBeDeleted){
  //get selected article
  const selectedDomain = megaArr.find(domainObj => domainObj.id === selectedListId)
  selectedDomain.articlesArr.forEach(article => {
    if(article === articleToBeDeleted){
      const index = selectedDomain.articlesArr.indexOf(articleToBeDeleted)
      if (index > -1) {
        selectedDomain.articlesArr.splice(index, 1);
      }
    }
  })
  //update MegaArr
  storeMegaArrInLocalStorage()
}