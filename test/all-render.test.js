import ImageItem from '../src/ImageItem.js';
import FilterImages from '../src/FilterImages.js';
import images from '../src/data/images.js';

const test = QUnit.test;

QUnit.module('Render Img');

test('render an img', assert => {
    // arrange
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/ ` 
    <li class="card">
    <div>
    <h2>UniWhal</h2>                                
    <p>Horns: 1</p>
    </div>
    <div class="img-contain" title="A unicorn and a narwhal nuzzling their horns">
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
    </div>
    </li>`;
    console.log(image);
    // act
    const props = { image: image };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});

test('renders html from data', assert => {
    // arrange
    const expected = /*html*/`
    <select><option selected value="view-all">View All</option>
        <option value="one-horn">1 Horn</option>
        <option value="two-horn">2 Horns</option>
        <option value="three-horn">3 Horns</option>
        <option value="one-hundred-horn">100 Horns</option></select>
    `;
    // act
    const props = { images: images };
    const filterImages = new FilterImages(props);
    const html = filterImages.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});