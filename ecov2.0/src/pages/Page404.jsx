import React, { useEffect, useState } from 'react'

const Page404 = () => {
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setCarga(true)
        }, 1000)
    }, [])

    if (carga) {
        return (
            <div id="content" class="page-post">


                <div class="container">


                    <div class="page page-404">

                        <h1 class="entry-title page-title">404</h1>

                        <div class="entry-content page-content">
                            <h4>Page Not Found</h4>
                            <div class="sep-border-icon margin-top60 margin-bottom60">
                                <i class="ion ion-ios-arrow-down"></i>
                            </div>
                            {/* <p>Can't find what you need? Take a moment and do a search below!</p>
                            <form action="#" method="get" class="affa-form-search">
                                <input type="text" name="s" id="s" placeholder="Search...." />
                                <input type="submit" id="searchsubmit" value="Search" />
                            </form> */}
                        </div>

                    </div>


                </div>


            </div>
        )
    }


}

export default Page404