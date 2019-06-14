$(document).ready(function() {
    // <article class="post-preview" data-article-id="1">
    //   <a href="#">
    //     <h2 class="post-title">title of my post</h2>
    //     <h3 class="post-subtitle">
    //       Problems look mighty small from 150 miles up
    //     </h3>
    //   </a>
    //   <p class="post-meta">Posted by Start Bootstrap on September 24, 2014</p>
    // </article>;
  
    const createTweetElement = tweet => {
      const $article = $('<article>')
        .addClass('post-preview')
        .attr('data-article-id', 1);
  
      const $link = $('<a>').attr('href', '#');
  
      const $h2 = $('<h2>')
        .addClass('post-title')
        .text('title of my post');
  
      const $h3 = $('<h3>')
        .addClass('post-subtitle')
        .text('Problems look mighty small from 150 miles up');
  
      const $p = $('<p>')
        .addClass('post-meta')
        .text('Posted by Start Bootstrap on September 24, 2014');
  
      $link.append($h2).append($h3);
  
      $article.append($link).append($p);
  
      return $article;
    };
  });
  