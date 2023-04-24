
const css = {
    background: 'blue',
    width: '200px',
    borderRadius: '10px',
    margin: '50px',
    padding: '20px'
}

export function Card (props) {
    return (
        <div>

            <div style={css}>

                <img style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }} src={require('./bablu.jpg')} />
                <h5 style={{ color: '#a59a9a' }}>Front-End Developer</h5>
                <h2 style={{ color: 'white' }}>Bablu Kumar</h2>
                <p style={{ color: 'white' }}>B.tech In Civil Engineering, HTML,CSS,JavaScript,React</p>
                <button > see moree</button>
            </div>

            <div style={css}>

                <img style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYCzMSvQHNB3qwcdDRFzs01p1nIJK3r04JuHsPMnjU6pKKWkV'} />
                <h5 style={{ color: '#a59a9a' }}>Chief Executive Officer of Google</h5>
                <h2 style={{ color: 'white' }}>Sundar Pichai</h2>
                <p style={{ color: 'white' }}>Education	IIT Kharagpur (BTech) Stanford University (MS) University of Pennsylvania (MBA)</p>
                <button style={{ background: '#a59a9a' }}> see more</button>
            </div>

            <div style={css}>

                <img style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }} src={'https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg'} />
                <h5 style={{ color: '#a59a9a' }}>Chief Executive Officer of Microsoft</h5>
                <h2 style={{ color: 'white' }}>Satya Nadella</h2>
                <p style={{ color: 'white' }}>Education Manipal Institute of Technology (BS) University of Wisconsin–Milwaukee (MS) University of Chicago (MBA)</p>
                <button style={{ background: '#a59a9a' }}> see more</button>
            </div>

        </div>

    );

}