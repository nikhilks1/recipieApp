import React, { useEffect, useState } from 'react';
import { fetchAllRecipes } from '../redux/recipeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const View = () => {
    const dispatch = useDispatch();
    const { recipes, status } = useSelector((state) => state.recipes);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const recipePerPage = 8;
    
    const filteredRecipes = recipes?.filter(recipe => 
        recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredRecipes?.length / recipePerPage);
    const currentPageLastRecipeIndex = currentPage * recipePerPage;
    const currentPageFirstRecipeIndex = currentPageLastRecipeIndex - recipePerPage;
    const visibleCards = filteredRecipes?.slice(currentPageFirstRecipeIndex, currentPageLastRecipeIndex);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        dispatch(fetchAllRecipes());
    }, [dispatch]);

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <form className="d-flex mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Cuisine"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {status === 'loading' ? (
                            <p>Loading...</p>
                        ) : status === 'failed' ? (
                            <p>Failed to load recipes.</p>
                        ) : (
                            visibleCards.map((recipe) => (
                                <div className="col mb-5" key={recipe.id}>
                                    <div className="card h-100">
                                        <img className="card-img-top" src={recipe.image} alt={recipe.name} />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{recipe.name}</h5>
                                                <p>{recipe.cuisine}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <Link to={`/${recipe.id}/recipe`} className="btn btn-outline-dark mt-auto">
                                                    View Recipe
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pagination controls */}
                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center mt-4">
                            <button 
                                className="btn btn-dark mx-2"
                                onClick={previousPage} 
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button 
                                className="btn btn-dark mx-2"
                                onClick={nextPage} 
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default View;
