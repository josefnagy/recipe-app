import React from 'react';

const recipes: string[] = [
    'Ovesné rizoto s hráškem',
    'Podzimní salát s růžičkovou kapustou',
    'Zapečené rajčatové noky',
    'Hovězí na víně',
    'Zeleninový pastýřský koláč',
    'Těstoviny s krémovou paprikovou omáčkou',
    'Květák s míchaným vejcem',
    'Salát z pečených brambor a rajčat',
    'Punjabi Dal Makhani',
    'Italské rizoto s chřestem',
    'Řepové rizoto s gorgonzolou',
    'Těstoviny s citrónem a cuketou',
    'Nasi Goreng',
    'Lilkové lasagne',
    'Cuketové špagety s rajčatovým pestem',
    'Kuřecí satay s quinoa salátem',
];

const renderRecipes = recipes.map((recipe) => (
    <p className="py-1 px-3 hover:bg-tertiary cursor-pointer hover:text-secondary" key={recipe}>
        {recipe}
    </p>
));

const RecipeList: React.FC = () => {
    return <div className="font-heading font-light py-3 ">{renderRecipes}</div>;
};

export default RecipeList;
