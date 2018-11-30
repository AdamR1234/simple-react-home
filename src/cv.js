import React from 'react';






const CV = () => ({
render(){
return (
 <div id="cv">
                  <div className="cv-intro">
                  Adam Roe<br />
                  <span style={{fontStyle:"italic",
                               fontSize:"0.9em"}}>BSc (Hons)</span><br />


                  Hindley<br />
                  adam-@msn.com <br /><br />


                  Graduating from the University of Central Lancashire in 2017,
                  I aquired a 2:1 in Computing.<br />
                  After graduating, I was blessed with
                  a job at Tesco and I'm currently there to-date.<br /><br />

                  I have a deep interest in web development, especially front-end as I enjoy
                  experimenting with different styles.


                  </div>
                 
                  <div className="cv-body">
                  
                  <table>
                    <th>Skills</th>
                    <th>Experience</th>
                    <th>Knowledge Rating</th>
                    
                    <tr>
                    <td>HTML<br />CSS</td>
                    <td>The backbone behind any web-based project I've made
                    </td>
                    <td>Intermediate</td>
                    </tr>


                    <tr>
                    <td>PHP</td>
                    <td>Used to create multiple projects throughout
                      university from a basic shopping cart to a 
                      social network
                    </td>
                    <td>Graduate</td>
                    </tr>

                   
                    <tr>
                    <td>MySQL</td>
                    <td>Using PHP prepared statements in my projects, I was able to extract data
                    from a MySQL database
                    </td>
                    <td>Graduate</td>
                    </tr>

                    <tr>
                    <td>jQuery<br />Javascript</td>
                    <td>
                      For creating a dynamic interface in my projects, utilising AJAX and various transitions
                    </td>
                    <td>Graduate</td>
                    </tr>


                    <tr>
                    <td>VPS<br />Management</td>
                    <td>
                      A personal study where I'm using an Ubuntu VPS to host THIS website via NGINX
                    </td>
                    <td>Probably quite low</td>
                    </tr>

                    <tr>
                    <td>React</td>
                    <td>
                      Basic components/routing here and there
                    </td>
                    <td>Beginner</td>
                    </tr>

                  </table>
                  </div>
                  
                  </div>
);
}

});

export default CV;