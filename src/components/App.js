import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state={videos: [], selectedVideo:null};

    componentDidMount(){
        this.onTermSubmit('news');
    };

    onTermSubmit=async(term)=>{ //siempre debe de ser un funcion async para evitar mostrar datos que no son reales
        const response=await youtube.get('/search',{//solicitud "const response=await" SOLAMENTE VA CON FUNCIONES ASYNC
            params:{
                q:term
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo: response.data.items[0]
        });//para saber response.data.items debemos usar console.log(term) 
                                                    //para analizar y saber que ruta necesitamos para extraer nuestra informacion
    };

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    };

    render(){
        return (
        //ui continer es para hacer un margen entre la barra de busqueda y los bordes de la pagina
        <div className="ui container">
           <SearchBar onFormSubmit={this.onTermSubmit}/>
           <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/> 
                </div>
            </div>
           </div>
        </div>
        );
    }
}

export default App;