import fetch from 'node-fetch';

async function apiCall(){
    try {
        const movies = await fetch('http://example.com/movies.json');
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

apiCall();