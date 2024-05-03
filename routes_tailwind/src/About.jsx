import React from 'react'
import useSWR from 'swr'

function About() {
    let meme = "wow";
    let apiKey = __GIPHYKEY__
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${meme}&api_key=${apiKey}&limit=2`;
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(giphyAPI, fetcher)

    if (isLoading) return <div>loading...</div>
    if (error) return <div>failed to load</div>

    return (
        <>
            <div className='my-10 text-5xl font-bold text-center'>About</div>

            <div className='flex justify-between w-2/3 mr-auto ml-auto flex-wrap '>
                {
                    data.data.map((res) => {
                        return <img className='w-1/2' key={res.id} src={res.images.original.url} alt="" />
                    })
                }
            </div>
        </>


    )
}

export default About