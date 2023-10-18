import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Article } from "../interfaces/article";

const ModerationScreen: NextPage = () => {
    const api_path = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const [articles, setArticles] = useState<Article[]>([]);

    const handleBackToHome = useCallback(() => {
        router.push("/");
    }, [router]);

    //Functions 
  useEffect(() => {
    //Sends get requst to get all done articles  
    fetchArticleData(); 
  }, []); 

    const fetchArticleData = () => {
        const apiUrl = api_path + "/article/";
        fetch(apiUrl, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        }).then((response) => {
            if (!response) {
                throw new Error("Error collecting data");
            } else {
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            setArticles(data.articleData);
        }).catch((err) => {
            console.log(err);
            alert("Error collecting search data. Check logs");
        });
    }

    const mapArticlesToTable = (mapArticles: Article[]) => {
        console.log(mapArticles);
        return (
            mapArticles.map((value, index) => {
                return (createTableRow(value, index))
            })
        );
    };

    const createTableRow = (article: Article, index: number) => {
        return(
            <tr key={index}>
                <td>{article._id}</td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.name, "name") : null}>{article.name}</button></td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.author, "author") : null}>{article.author}</button></td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.publishDate, "publishDate") : null}>{article.publishDate}</button></td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.link, "link") : null}>{article.link}</button></td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.stage, "stage") : null}>{article.stage}</button></td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.practice, "practice") : null}>{article.practice}</button></td>
                <td><button onClick={() =>article._id != undefined ? updateArticle(article._id, article.claim, "claim") : null}>{article.claim}</button></td>
                <td>{article.upRating}</td>
                <td>{article.downRating}</td>
                <td><button onClick={() => article._id != undefined ? removeArticle(article._id ): console.log("No such id")}>Delete</button></td>
            </tr>
        );
    };

    const updateArticle = (articleId: string,oldValue: any, field: string) => {
        const updatedValue = prompt("Enter new value for field = " + field);
        const confirmed = confirm(`Are you sure you want to update?\nArticle ID = ${articleId}\nField =${field}\nOld Value = ${oldValue}\nNew Value = ${updatedValue}`);
    
        if(confirmed) {
            const updatebody: Record<string, any> = {};
            updatebody[field] = updatedValue;

            //Sends get requst to get all done articles  
            const apiUrl = api_path + "/article/" + articleId;
            fetch(apiUrl, {
                method: "PUT",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': "*"
                },
                body: JSON.stringify(updatebody)
            }).then((response) => {
                if (!response) {
                    throw new Error("Error collecting data");
                } else {
                    return response.json();
                }
            }).then((data) => {
                console.log(data);
                setArticles((oldArray: Article[]) => {
                    const copyArray = [...oldArray];
                    const updateIndex = oldArray.findIndex(obj => obj._id === data.existingArticle._id);
                    if(updateIndex !== -1) {
                        copyArray[updateIndex] = data.existingArticle;
                    }
                    return copyArray;
                });
            }).catch((err) => {
                console.log(err);
                alert("Error collecting search data. Check logs");
            });
        } 
    }

    const removeArticle = (articleId:string) => {
        console.log("Removing article");

        //Sends get requst to get all done articles  
        const apiUrl = api_path + "/article/" + articleId;
        fetch(apiUrl, {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        }).then((response) => {
            if (!response) {
                throw new Error("Error collecting data");
            } else {
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            setArticles((oldArray: Article[]) => {
                const updateIndex = oldArray.findIndex(obj => obj._id === data.deletedArticle._id);
                if (updateIndex !== -1) {
                    alert("Article was removed");
                    return oldArray.slice(0, updateIndex).concat(oldArray.slice(updateIndex + 1));
                }
                return oldArray;
            });
        }).catch((err) => {
            console.log(err);
            alert("Error collecting search data. Check logs");
        });
    };

    return (
        <div>
            <div>
                <button onClick={handleBackToHome}>Home</button>
                <button onClick={fetchArticleData}>Refresh</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Publish Date</th>
                            <th>Link</th>
                            <th>Stage</th>
                            <th>Practice</th>
                            <th>Claims</th>
                            <th>Up Rating</th>
                            <th>Down Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapArticlesToTable(articles)}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ModerationScreen;