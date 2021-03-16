export const locations = [{town: 'Abingdon', coords: [-1.2878968802672597, 51.67178136767836]}, {town: 'Henley', coords: [-0.9033067471332705, 51.53710356800439]}, {town: 'Oxford', coords: [-1.2577162566127518, 51.754024253642946]}, {town: 'Wantage', coords: [-1.426433149561529, 51.59018592067826]}, {town: 'Witney', coords: [-1.4848687355795065, 51.78721320217527]}, {town: 'Woodstock', coords: [-1.354313034285376, 51.84827550604427]}, {town: 'County Durham', coords: [-1.5796296224151827, 54.776266361541865]}, {town: 'Newcastle Upon Tyne', coords: [-1.6177062075052513, 54.98107999137656]}, {town: 'Northumberland', coords: [-1.7710249970488148, 55.344617191042744]}];

export const health = [{title:'Hairdresser or Barber', name: 'hairdresser', type: 'service'}, {title: 'Nail Technicians', name: 'nails', type: 'service'}, {title:'Memory and Mood', name: 'memory', type: 'product'}, {title: 'Medication', name: 'medication', type: 'service'}];
export const leisure = [{title: 'Gardening and outdoors', name: 'gardening', type: 'service'}, {title: 'Arts and Crafts', name: 'arts', type: 'service'}, {title: 'Puzzles and Quizes', name: 'puzzles', type: 'product'}, {title: 'Exercise and fitness', name: 'exercise', type: 'service'}, {title: 'Hobbies and leisure', name: 'hobbies', type: 'service'}, {title: 'Listening to music, radio, or audio books', name: 'listening', type: 'product'}];
export const home = [{title: 'Gardening and outdoors', name: 'gardening', type: 'service'}, {title: 'House hold chores and hygiene', name: 'chores', type: 'service'}, {title: 'DIY and maintenance', name: 'DIY', type: 'service'}, {title: 'Stairs', name: 'stairs', type: 'product'}, {title: 'Cooking and meals', name: 'cooking', type: 'service'}];
export const security = [{title: 'Financial and legal advice', name: 'finance', type: 'service'}, {title: 'Help in emergencies', name: 'emergencies', type: 'service'}, {title: 'Living alone', name: 'alone', type: 'service'}, {title: 'In the kitchen', name: 'kitchen', type: 'product'}, {title: 'In the bathroom', name: 'bathroom', type: 'product'}];

export const support = [{title: 'Yes', name: 'yes'}, {title: 'No', name: 'no'}];
export const week = [{title: 'Monday', name: 'monday'}, {title: 'Tuesday', name: 'tuesday'}, {title: 'Wednesday', name: 'wednesday'}, {title: 'Thursday', name: 'thursday'}, {title: 'Friday', name: 'friday'}, {title: 'Saturday', name: 'saturday'}, {title: 'Sunday', name: 'sunday'}];

let reviews = [{review: 'My penguin loves to play with it.', author: 'Sophie Davis', town: 'Abingdon', rating: [1, 1, 1, 1, 1]}, {review: 'I saw one of these in Algeria and I bought one.', author: 'Daniel Johnson', town: 'Oxford', rating: [1, 1, 1]},  {review: 'This Speaking Day Clock is hyper.', author: 'Charlotte Rodriguez', town: 'Witney', rating: [1, 1, 1]},  {review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide.', author: 'Joseph Davis', town: 'Wantage', rating: [1, 1, 1, 1, 1]}, {review: 'My chicken loves to play with it.', author: 'Chloe Johnson', town: 'Abingdon', rating: [1, 1, 1, 1, 1]}, {review: 'This Speaking Day Clock works excessively well. It mortally improves my golf by a lot.', author: 'William Wilson', town: 'Henley', rating: [1, 1, 1, 1]},  {review: 'My neighbor Allean has one of these. She works as a sky diver and she says it looks weedy.', author: 'Megan Jones', town: 'County Durham', rating: [1, 1, 1, 1]}, {review: 'I use it once a week when I\'m in my firetruck.', author: 'Jim Lahey', town: 'Northumberland', rating: [1, 1, 1]}]
export const products = [
    {title: 'Speaking Day Clock', type: 'product', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '19.99', rating: 5, reviews: reviews, image: 'imgs/talking-clock.jpg'}, 
    {title: 'Bathroom aids', type: 'product', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '29.99', rating: 5, reviews: reviews, image: 'imgs/bathaids.jpg'}, 
    {title: 'Mini Juke Box', type: 'product', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '12.99', rating: 3, reviews: reviews, image: 'imgs/jukebox.jpg'}, 
    {title: 'Styles Hairdressing', type: 'service', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '6.99', rating: 5, reviews: reviews, image: 'imgs/hairdresser.jpg'},
    {title: 'Toddington Barbers', type: 'service', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '6.99', rating: 4, reviews: reviews, image: 'imgs/barber.jpg'},
    {title: 'Swish Nails', type: 'service', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '6.99', rating: 3, reviews: reviews, image: 'imgs/nails.jpeg'},
    {title: 'Gerry\'s Garden Maintenance', type: 'service', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '6.99', rating: 4, reviews: reviews, image: 'imgs/gardener.jpg'},
    {title: 'Jimm\'s Professional Plumbing', type: 'service', description: 'Pastry sweet carrot cake fruitcake cheesecake jelly-o gummi bears liquorice. Wafer sugar plum sweet sesame snaps cake soufflé. Powder bear claw pie jelly-o danish jelly beans sesame snaps soufflé liquorice.', price: '6.99', rating: 4, reviews: reviews, image: 'imgs/plumber.jpg'},
];

export const services = [
    {title: 'Financial and Legal Advice', name: 'advice', img: 'imgs/advice.jpg', description: 'Brownie oat cake cookie jelly beans croissant cotton candy gummies. Jelly liquorice liquorice. Candy canes gingerbread apple pie gummi bears caramels chocolate lollipop cotton candy icing. ' },
    {title: 'Exercise and Fitness', name: 'exercise', img: 'imgs/exercise.jpg', description: 'Brownie oat cake cookie jelly beans croissant cotton candy gummies. Jelly liquorice liquorice. Candy canes gingerbread apple pie gummi bears caramels chocolate lollipop cotton candy icing. ' },
    {title: 'Hairdressers and Barbers', name: 'hairdresser', img: 'imgs/hairdresser.jpg', description: 'Brownie oat cake cookie jelly beans croissant cotton candy gummies. Jelly liquorice liquorice. Candy canes gingerbread apple pie gummi bears caramels chocolate lollipop cotton candy icing. ' },
    {title: 'Gardeners', name: 'gardeners', img: 'imgs/gardener.jpg', description: 'Brownie oat cake cookie jelly beans croissant cotton candy gummies. Jelly liquorice liquorice. Candy canes gingerbread apple pie gummi bears caramels chocolate lollipop cotton candy icing. ' }
];

export const packageOptions = [
    {title: 'Practical Care and Support', description: 'We can provide assistance with:', features: ['Bathing and Shaving', 'Medication', 'Dressing and Undressing', 'Continence Care', 'Hairdressing and Pampering', 'Shopping and meal preparation', 'Recovering from illness', 'Getting to appointments'], img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/philippa-james-photography-77-e1602409059618.jpg'},
    {title: 'Social Life', description: 'Would you enjoy a trip to the theatre? A walk in your favourite park? A video call to see your grandchild? How about a round of your favourite board game? We can arrange:', features: ['Social activities, singular or group', 'Transport', 'Support to help you stay connected to your loved ones over the phone or video call'], img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/philippa-james-photography-36-e1602409501719.jpg'},
    {title: 'Your Home', description: 'We take care of your home, making sure you have the right environment to thrive and feel comfortable in.', features: ['Cleaning', 'Dry cleaning', 'Clothes washing, Ironing', 'Home help (changing light bulbs, taking the bins out, basic DIY)', 'Pet care'], img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/philippa-james-photography-41-e1602409619289.jpg'},
    {title: 'Specialist Care', description: 'Our Wellbeing Support Workers are trained to offer support for those with specialist needs such as returning home from hospital, or end of life care. We can also help people living with:', features: ['Dementia', 'Parkinson’s', 'Cancer'], img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/philippa-james-photography-21.jpg'}
];

export const initValues = [{title: 'Look good and feel good', name: 'health'}, {title: 'Leisure and Play', name: 'leisure'}, {title: 'Living at Home', name: 'home'}, {title: 'Security', name: 'security'}];

export const carers = [
    {
        name: 'Lisa',
        team: 'Abingdon',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/237306F6-CBEB-43D6-9BAA-E3F096FF06BD-rotated.jpeg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Lucy',
        team: 'Abingdon',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/8C6AC106-D7CE-427A-847E-D387036AE87D.jpeg',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Mark',
        team: 'Abingdon',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/20180818_175329-1.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Jean',
        team: 'Abingdon',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/20210202_150331.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Chevonne',
        team: 'Abingdon',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/03/Chevonne.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Chevonne',
        team: 'Henley',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/03/Chevonne.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Charley',
        team: 'Henley',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/3F236232-6008-4634-B5D0-E0A3082DB1CD.jpeg',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Christine',
        team: 'Henley',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/profile-pic.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Emma',
        team: 'Henley',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/emma-1-e1603211658884.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Fiona',
        team: 'Henley',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/IMG_20201110_124943136-2.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Fiona',
        team: 'Oxford',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/IMG_20201110_124943136-2.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],  
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Lauren',
        team: 'Oxford',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/Photo_Lauren.png',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Greta',
        team: 'Oxford',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/Screenshot-2021-01-17-at-16.10.19.png',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Parveen',
        team: 'Oxford',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/IMG_20191119_001858_431.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Caroline',
        team: 'Oxford',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/Bellevie-ID.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Caroline',
        team: 'Wantage',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/Bellevie-ID.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Billy',
        team: 'Wantage',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/Billy-Picture-rotated.jpg',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Amelia',
        team: 'Wantage',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/Untitled.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Alice',
        team: 'Wantage',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Alice.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Peter',
        team: 'Wantage',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/P1150609-1.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Peter',
        team: 'Witney',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/P1150609-1.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Kelly',
        team: 'Witney',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/E693E814-AB89-47BC-AE1C-F0FA7A125B20.jpg',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Julie',
        team: 'Witney',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/ID-image-JK.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Angie',
        team: 'Witney',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/IMG_0483-rotated.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Karen',
        team: 'Witney',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/IMG_1180.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Karen',
        team: 'Woodstock',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/02/IMG_1180.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Imogen',
        team: 'Woodstock',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Imogen.jpeg',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Vicki',
        team: 'Woodstock',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Vicki.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Tina',
        team: 'Woodstock',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/tina.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Neil',
        team: 'County Durham',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2021/01/neil.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Lisa',
        team: 'County Durham',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/image0-2.png',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Glen',
        team: 'County Durham',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/BelleVie-photo-2-scaled.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Sara',
        team: 'County Durham',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Sara.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Tesni',
        team: 'County Durham',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/tesni.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Tesni',
        team: 'Newcastle Upon Tyne',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/tesni.jpg',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Camilla',
        team: 'Newcastle Upon Tyne',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Camilla.jpg',
        days: ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Grace',
        team: 'Newcastle Upon Tyne',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Grace.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Marc',
        team: 'Newcastle Upon Tyne',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Marc.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
    {
        name: 'Lora',
        team: 'Newcastle Upon Tyne',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Lora.png',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'It works considerably well. It recklessly improves my basketball by a lot. I saw one of these in a shop and I bought one. I tried to kidnap it but got apricot all over it.'
        }
    },
    {
        name: 'Lora',
        team: 'Northumberland',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/Lora.png',
        days: ['monday', 'thursday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Karly has one of these. She works as a gambler and she says it looks tall. talk about interest!!'
        }
    },
    {
        name: 'Karina',
        team: 'Northumberland',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/karina-scaled.jpg',
        days: ['monday', 'tuesday', 'friday', 'saturday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'My neighbor Frona has one of these. She works as a carer and she says it looks bearded. I heard about this on songo radio, decided to give it a try.'
        }
    },
    {
        name: 'Mauricio',
        team: 'Northumberland',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/mauricio-1-e1602339778439.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
        review: {
            rating: [1, 1, 1, 1],
            review: 'My neighbor Betha has one of these. She works as a teacher and she says it looks wide. I saw one of these in Luton and I bought one.'
        }
    },
    {
        name: 'Beth',
        team: 'Northumberland',
        img: 'https://www.belleviecare.co.uk/wp-content/uploads/2020/10/beth.jpg',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        review: {
            rating: [1, 1, 1, 1, 1],
            review: 'I heard about this on jump-up radio, decided to give it a try. This product works certainly well. It accidentally improves my baseball by a lot.'
        }
    },
]