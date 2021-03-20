import React from 'react';
import { Route, useHistory } from 'react-router';
// import Location from '../Location/Location';


const Home = () => {
	const history = useHistory()
	const handleSignIn = () =>{
   history.push('/Login');
	}
  
    return (
        <Route> 
			<h1 className="text-primary" style={{textAlign: 'center'}}><strong>Moving Hero</strong></h1> 
			<div style={{ color:'green'}} className="container">
  <div className="row">
    <div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Car</h5>
    <p class="card-text">Some quick example </p>
    <a href=" # " class="btn btn-primary" onClick={handleSignIn}>Select a Car</a>
  </div>
</div>
</div>
    <div className="col-sm"> <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Bike</h5>
    <p class="card-text">Some quick example </p>
    <a href=" # " class="btn btn-primary" onClick={handleSignIn}>Select a Bike</a>
  </div>
</div>
</div>
    <div className="col-sm"> <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Train</h5>
    <p class="card-text">Some quick example </p>
    <a href=" #" class="btn btn-primary" onClick={handleSignIn }>Select a Train</a>
  </div>
</div>
</div>
  </div>
</div>

{/* <div>
            {
                handleSignIn.map(location => <Location key={location.bedType} location={location}></Location>)
            }
        </div> */}
		</Route>
           

            
    );
};


export default Home;