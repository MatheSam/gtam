import { useEffect } from 'react';

export function useReveal(){
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

    const elements = Array.from(document.querySelectorAll('.reveal'));
    elements.forEach(element=>element.classList.add('will-reveal'));

    if(!('IntersectionObserver' in window)){
      elements.forEach(element=>element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.01,rootMargin:'0px 0px 80px 0px'});

    elements.forEach(element=>observer.observe(element));

    // Keep content visible if the browser creates an observer but never reports intersections.
    const fallback = window.setTimeout(()=>{
      elements.forEach(element=>element.classList.add('is-visible'));
      observer.disconnect();
    },1800);

    return()=>{
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  },[]);
}
