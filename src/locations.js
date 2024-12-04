function renderLocations(){
    content.innerHTML = 
    `
      <div id="locations">
            <h1>Locations</h1>
            <h2>
                Sushi Kayto - Downtown Location
            </h2>
            <p>
                123 Main St, Suite 101, San Francisco, CA 94105
            </p>
            <h2>
                Sushi Kayto - Westside Location
            </h2>
            <p>
                4565 Beverly Glen Blvd, Los Angeles, CA 90056
            </p>
            <h2>
                Sushi Kayto - East Bay Location
            </h2>
            <p>
                789 El Camino Real, Suite C, Pleasanton, CA 94566
            </p>
        </div>
    `;
};

export {renderLocations};