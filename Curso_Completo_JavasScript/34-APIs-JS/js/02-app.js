// APIs Intersection Observer 

/*The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's, most knowing as infinite scroll */ 


document.addEventListener('DOMContentLoaded',()=>{
    const observer = new IntersectionObserver(entries =>{ //IntersectionObserver creates and returns a new IntersectionObserver object
        if (entries[0].isIntersecting)  {//isIntersecting, it's configured to watch for given ratios of visibility within the root 
            console.log('Ya esta Visible');
        }
    });

    observer.observe(document.querySelector('.premium'))


})
