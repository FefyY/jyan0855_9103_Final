# jyan0855_9103_Final

## How to interat

To experience the animated desert ecosystem created, simply load the page and watch as the scene. The animation progresses automatically, simulating the passage of time in a desert environment. 

## Inspirations 

Inspired by a documentary on desert ecosystems, I aimed to capture both the harshness and the subtle beauty of desert life.([reference video on documentary](https://www.youtube.com/watch?v=SgFbEQp_muo)) The technical implementation involves updating the position of sand dots and plant leaves every frame, giving the illusion of wind. The grass grows incrementally over time, implemented through a time-lapse technique ([reference video on time-lapse photography](https://www.youtube.com/watch?v=9Q5cwMhb_JU)).

## Modifications and Techniques:

In this project, my focus was on enhancing the realism of our desert scene by animating several components: sand, plants, grass and the newly introduced lizard. Unlike previous versions of our group project, new class lizard were not present before. The display draw the lizard and the direction of lizrad pointing is updated every 60 frame to simulate the natural movenment of lizard. For grass, it is now conducetd as a seprated class for modification. Each element in the scene reacts to simulated environmental changes, such as wind and time, which are controlled through code.

I chose time to drive my animations but also used some perlin noise knowledge to improve the animation. The movement of sand (represented by dots) is only inlfund by the movment on x-axis. The swaying of plant leaves (Flower objects) are influenced by Perlin noise, which provides a natural, fluid motion that simulates wind. The noise influence the movenment on x-axis and small change on y-axis on each of the leaves for all types of flowers. 
Time influences the growth of grass, movement of plants and the transitions between day and night, altering the scene’s brightness to simulate the passing of hours. The lizard will only move at day time. The use of time as a factor allows the scene to evolve, providing a dynamic representation of the desert from day to night, which adds a layer of depth different from the static components used by others.

