import React from 'react'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="/">Recipe Spot</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Recipes</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#!">Indian Dish</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#!">Chineese Dish</a></li>
                                    <li><a class="dropdown-item" href="#!">Mexican</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-dark d-flex align-items-center" type="submit">
                                <i class="bi bi-heart-fill me-2"></i>
                                Wishlist
                                <span class="badge bg-light text-dark ms-2 rounded-pill">0</span>
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
            {/* Header */}
            
        </div>
    )
}

export default Header
