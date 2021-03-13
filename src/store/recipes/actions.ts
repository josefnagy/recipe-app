import { Recipe, VIEW_RECIPE, FETCH_RECIPES, RecipeActionTypes } from './types';

export const fetchRecipes = (): RecipeActionTypes => {
  return {
    type: FETCH_RECIPES,
    payload: recipes,
  };
};

export const viewRecipe = (recipeId: Recipe['id']): RecipeActionTypes => {
  return {
    type: VIEW_RECIPE,
    payload: recipeId,
  };
};

const recipes: Recipe[] = [
  {
    id: 'aslkdhldksfhjklashdflkashdf',
    name: 'Kuře na kari',
    description:
      'To jsem si tak jednou zase dělala polívku z pečenejch račat a paprik a v tom mě to napadlo. To by byla přece úplně skvělá omáčka na těstoviny! Samozřejmě jsem ten recept trošku ještě upravila a doladila, ale základ je vlastně úplně stejnej, jako na tu polívku. Pak k pečený zelenině akorát do mixéru místo vývaru přihodíte ricottu a vznikne vám božská a delikátní omáčka.',
    portions: 4,
    difficulty: 'snadné',
    cookingTime: 30,
    url: 'https://www.kucharkaprodceru.cz/kure-na-kari/',
    notes:
      'Naprosto geniální recept, celkem rychlovka a chutově úžasné. Určitě zopakovat. A nebát se to trošku přiostřit',
    tags: ['kuře', 'těstoviny', 'oběd', 'večeře'],
    allIngredients: [
      {
        name: '',
        ingredients: [
          {
            name: 'kuřecí stehna',
            amount: 4,
            unit: 'kus',
            note: '',
          },
          {
            name: 'kari',
            amount: 2,
            unit: 'lžička',
            note: '',
          },
          {
            name: 'rýže',
            amount: 300,
            unit: 'g',
            note: '',
          },
          {
            name: 'cibule',
            amount: 1,
            unit: 'kus',
            note: 'velká',
          },
        ],
      },
      {
        name: 'Marináda',
        ingredients: [
          {
            name: 'olivový olej',
            amount: 2,
            unit: 'lžíce',
            note: '',
          },
          {
            name: 'česnek',
            amount: 4,
            unit: 'stroužek',
            note: '',
          },
          {
            name: 'chilli paprika',
            amount: 1,
            unit: 'kus',
            note: '',
          },
        ],
      },
    ],
    battlePlan: [
      'Zázvor oloupejte a nakrájejte nadrobno. Česnek oloupejte, každý stroužek trochu rozmáčkněte a nakrájejte nadrobno. Maso opláchněte, osušte a rozkrájejte na větší kousky, zhruba velikosti sousta. Cibuli oloupejte a nakrájejte nadrobno.',
      'Koriandr, kardamom, římský kmín a zarovnanou lžičku soli rozdrťte v hmoždíři a prosijte sítkem. Zachycený zbytek koření znovu rozdrťte a prosijte, a to, co i přes veškerou snahu a důraznost tloučku zbylo v sítku, vyhoďte. Stejně to jsou hlavně tuhé slupky.',
      'Plechovkou s kokosovým mlékem důrazně zatřepte, aby se trochu spojil oddělený obsah, a otevřete ji. V úzké vysoké nádobě rozmixujte ponorným mixérem polovinu kokosového mléka, zázvor, česnek a arašídy. Pokud máte rádi pálivé, můžete ještě přidat očištěnou, semínek zbavenou zelenou feferonku. Vznikne hrubá řídká pasta, která bude vypadat, jako by byla sražená.',
      'V širším kastrolu rozehřejte olej. Vložte kousky masa a zprudka je opékejte, dokud se na spodní straně nezatáhnou a nezačnou zlátnout, asi 3 minuty. Pak je otočte a zopakujte to i z druhé strany. Jakmile se maso opeče, přidejte cibuli a všechno koření. Ještě asi minutu míchejte, až cibule změkne a zprůsvitní a koření se rozvoní.',
      'Potom zalijte ochuceným kokosovým mlékem a zbytkem kokosového mléka a přiveďte k mírnému varu. Zakryjte poklicí a nechte zvolna pobublávat a dusit 20-25 minut, až maso příjemně změkne.',
      'Podávejte zásadně s dušenou rýží, posypané nasekanou koriandrovou natí, je-li vám příjemná, a nechte se unést výraznými a přesto křehkými vůněmi. V chuti vás překvapivě nepřekvapí kokos, jak by se na první přečtení receptu mohlo zdát, zato budete mít pocit, že je vše v zajímavé, nenapodobitelné harmonii.',
    ],
    createdAt: 123156455646,
    updatedAt: 321354646512,
  },
  {
    id: 'xvczvzxdfasdasfadasfasf ',
    name: 'Mrkvovo fenyklová polévka ',
    description: 'Prostě super polívčička',
    portions: 4,
    difficulty: 'snadné',
    cookingTime: 30,
    url: 'https://paleosnadno.cz/recept/mrkvovo-fenyklova-polevka/',
    notes: 'Klasika která jen tak neomrzí',
    tags: ['mrkev', 'fenykl', 'oběd', 'večeře', 'polévka'],
    allIngredients: [
      {
        name: '',
        ingredients: [
          {
            name: 'mrkev',
            amount: 6,
            unit: 'kus',
            note: 'větší',
          },
          {
            name: 'fenykl',
            amount: 2,
            unit: 'bulva',
            note: '',
          },
          {
            name: 'cibule',
            amount: 2,
            unit: 'kus',
            note: '',
          },
          {
            name: 'česnek',
            amount: 2,
            unit: 'stroužek',
            note: '',
          },
          {
            name: 'kokosové mléko',
            amount: 400,
            unit: 'ml',
            note: '',
          },
          {
            name: 'olivový olej',
            amount: 2,
            unit: 'lžíce',
            note: '',
          },
        ],
      },
    ],
    battlePlan: [
      'Očistěte si zeleninu (oškrábejte mrkev, oloupejte cibuli a česnek, fenykl zbavte vrchních listů, nať z fenyklu si ponechte na ozdobení při servírování).',
      'Veškerou zeleninu nakrájejte na menší kousky a dejte opéct na rozehřátý tuk do vyššího hrnce. Za častého míchání zeleninu opékejte cca 15-20 minut.',
      'Druhou variantou je pečení v troubě – sice trvá trošku déle, ale nemusíte být stále u plotny a nižší teplota je na úpravu i zdravější. Nakrájenou zeleninu promíchejte s tukem a pečte na 160°C cca 45 minut (česnek přidejte až cca na posledních 15 minut). Občas zkontrolujte a promíchejte.',
      'Upečenou zeleninu zalijte cca 1/2 litrem vody nebo vývaru, osolte, opepřete a vařte cca 15 minut, dokud zelenina úplně nezměkne (hlavně kontrolujte mrkev, té to trvá nejdéle).',
      'Na závěr přidejte kokosové mléko, rozmixujte ponorným mixérem dohladka a podle potřeby krém nařeďte troškou vody, dosolte či dopepřete (můžete přidat i špetku chilli) a chvíli nehcte prohřát.',
      'Podávejte s čerstvou fenyklovou natí a případně i troškou opečené zeleniny, kterou jste si před mixováním polévky dali stranou (na obrázku je polévka doplněná opečenými kousky masa a dochucená pár kapkami balsamica).',
    ],
    createdAt: 123154455646,
    updatedAt: 321377845512,
  },
];
