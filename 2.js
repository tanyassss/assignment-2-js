// Change the text of the heading using getElementById
const heading = document.getElementById('main-heading');
heading.textContent = 'DOM Manipulation Practice';

// Change the color of paragraphs with the class text-content using getElementsByClassName
const paragraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// Change the source of the image with the id main-image using getElementById
const mainImage = document.getElementById('main-image');
mainImage.src = 'https://via.placeholder.com/300';

// Change the background color of the div with the class container using querySelector
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0';

// Change the text of all paragraphs inside the container div using querySelectorAll
const containerParagraphs = document.querySelectorAll('.container p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'This paragraph has been updated via querySelectorAll.';
});
