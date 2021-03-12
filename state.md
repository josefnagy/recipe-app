# State Structure

## Recipes

```javascript

[
    {
        id: 'aslkdhldksfhjklashdflkashdf',
        name: 'Kuře na kari',
        description: "To jsem si tak jednou zase dělala polívku z pečenejch račat a paprik a v tom mě to napadlo. To by byla přece úplně skvělá omáčka na těstoviny! Samozřejmě jsem ten recept trošku ještě upravila a doladila, ale základ je vlastně úplně stejnej, jako na tu polívku. Pak k pečený zelenině akorát do mixéru místo vývaru přihodíte ricottu a vznikne vám božská a delikátní omáčka."
        portions: 4,
        difficulty: "snadné",
        cookingTime: 30,
        url: "https://www.kucharkaprodceru.cz/kure-na-kari/",
        notes: "Naprosto geniální recept, celkem rychlovka a chutově úžasné. Určitě zopakovat. A nebát se to trošku přiostřit",
        tags: ["kuře", "těstoviny", "oběd", "večeře"],
        allIngredients:[
            {
                ingGroupName: "",
                ingredients: [
                    {
                        ingName: "kuřecí stehna",
                        amount: 4,
                        unit: "kus"
                        ingNote: "",
                    },
                    {
                        ingName: "kari",
                        amount: 2,
                        unit: "lžička",
                        ingNote: "",
                    },
                    {
                        ingName: "rýže",
                        amount: 300,
                        unit: "g",
                        ingNote: "",
                    },
                    {
                        ingName: "cibule",
                        amount: 1,
                        unit: "kus",
                        ingNote: "velká",
                    },
                ]
            },
            {
                ingGroupName: "Marináda",
                ingredients: [
                    {
                        ingName: "olivový olej",
                        amount: 2,
                        unit: "lžíce"
                        ingNote: "",
                    },
                    {
                        ingName: "česnek",
                        amount: 4,
                        unit: "stroužek",
                        ingNote: "",
                    },
                    {
                        ingName: "chilli paprika",
                        amount: 1,
                        unit: "kus",
                        ingNote: "",
                    },
                ]
            }
        ],
        battlePlan: [
            "Zázvor oloupejte a nakrájejte nadrobno. Česnek oloupejte, každý stroužek trochu rozmáčkněte a nakrájejte nadrobno. Maso opláchněte, osušte a rozkrájejte na větší kousky, zhruba velikosti sousta. Cibuli oloupejte a nakrájejte nadrobno.",
            "Koriandr, kardamom, římský kmín a zarovnanou lžičku soli rozdrťte v hmoždíři a prosijte sítkem. Zachycený zbytek koření znovu rozdrťte a prosijte, a to, co i přes veškerou snahu a důraznost tloučku zbylo v sítku, vyhoďte. Stejně to jsou hlavně tuhé slupky.",
            "Plechovkou s kokosovým mlékem důrazně zatřepte, aby se trochu spojil oddělený obsah, a otevřete ji. V úzké vysoké nádobě rozmixujte ponorným mixérem polovinu kokosového mléka, zázvor, česnek a arašídy. Pokud máte rádi pálivé, můžete ještě přidat očištěnou, semínek zbavenou zelenou feferonku. Vznikne hrubá řídká pasta, která bude vypadat, jako by byla sražená.",
            "V širším kastrolu rozehřejte olej. Vložte kousky masa a zprudka je opékejte, dokud se na spodní straně nezatáhnou a nezačnou zlátnout, asi 3 minuty. Pak je otočte a zopakujte to i z druhé strany. Jakmile se maso opeče, přidejte cibuli a všechno koření. Ještě asi minutu míchejte, až cibule změkne a zprůsvitní a koření se rozvoní.",
            "Potom zalijte ochuceným kokosovým mlékem a zbytkem kokosového mléka a přiveďte k mírnému varu. Zakryjte poklicí a nechte zvolna pobublávat a dusit 20-25 minut, až maso příjemně změkne.",
            "Podávejte zásadně s dušenou rýží, posypané nasekanou koriandrovou natí, je-li vám příjemná, a nechte se unést výraznými a přesto křehkými vůněmi. V chuti vás překvapivě nepřekvapí kokos, jak by se na první přečtení receptu mohlo zdát, zato budete mít pocit, že je vše v zajímavé, nenapodobitelné harmonii."
        ],
        createdAt: 123156455646,
        updatedAt: 321354646512,

    }
]
```

### Actions:

    +   VIEW_RECIPE
    +   ADD_RECIPE
    +   REMOVE_RECIPE
    +   DELETE_RECIPE
