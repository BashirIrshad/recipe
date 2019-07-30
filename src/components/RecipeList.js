import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        
        const {handleChange, handleSubmit, value} = this.props;

        return (
            <React.Fragment>
                <RecipeSearch 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    value={value}
                />
                <div className="container">
                    <h1 className="text-slanted text-center my-5">Recipe List</h1>

                    <div className="row">
                        {this.props.recipes.map((recipe) =>{
                            return <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={this.props.handleDetails}/>
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
