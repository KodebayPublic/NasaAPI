# NasaAPI
Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too.

Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.

Each camera has a unique function and perspective, and they are named as follows:

ROVER CAMERAS

Abbreviation	Camera	Curiousity	Opportunity	Spirit FHAZ	Front Hazard Avoidance Camera	✔	✔	✔ RHAZ	Rear Hazard Avoidance Camera	✔	✔	✔ MAST	Mast Camera	✔ CHEMCAM	Chemistry and Camera Complex	✔ MAHLI	Mars Hand Lens Imager	✔ MARDI	Mars Descent Imager	✔ NAVCAM	Navigation Camera	✔	✔	✔ PANCAM	Panoramic Camera	✔	✔ MINITES Miniature Thermal Emission Spectrometer (Mini-TES)	✔	✔ QUERYING BY MARTIAN SOL

Parameter	Type	Default	Description sol	int	none sol (ranges from 0 to max found in endpoint) camera string	all	see table above for abbreviations page	int	1	25 items per page returned api_key	string	DEMO_KEY api.nasa.gov key for expanded usage EXAMPLE QUERIES

You can obtain the API KEY from <b>https://api.nasa.gov/</b>

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

QUERYING BY EARTH DATE

Parameter	Type	Default	Description earth_date	YYYY-MM-DD	none	sol (ranges from 0 to max found in endpoint) camera string	all	see table above for abbreviations page	int	1	25 items per page returned api_key	string	DEMO_KEY	api.nasa.gov key for expanded usage EXAMPLE QUERY

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

MISSION MANIFEST

A mission manifest is available for each Rover at /manifests/rover_name. This manifest will list details of the Rover's mission to help narrow down photo queries to the API. The information in the manifest includes:

Key	Description name	Name of the Rover landing_date	The Rover's landing date on Mars launch_date	The Rover's launch date from Earth status	The Rover's mission status max_sol	The most recent Martian sol from which photos exist max_date	The most recent Earth date from which photos exist total_photos	Number of photos taken by that Rover It also includes a list of objects under the "photos" key which are grouped by sol, and each of which contains:

Key	Description sol	Martian sol of the Rover's mission total_photos	Number of photos taken by that Rover on that sol cameras	Cameras for which there are photos by that Rover on that sol An example entry from a sol at /manifests/Curiosity might look like:

{ sol: 0, total_photos: 3702, cameras: [ "CHEMCAM", "FHAZ", "MARDI", "RHAZ" ] }

This would tell you that this rover, on sol 0, took 3702 photos, and those are from among the CHEMCAM, FHAZ, MARDI, and RHAZ cameras.