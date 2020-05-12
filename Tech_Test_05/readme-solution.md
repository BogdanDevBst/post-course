A pseudocode class outline I've used is:

class Square
    + name : string
    + accronym : string

class Row
    + left_square : square
    + center_square : square
    + right_square : square

class Face
    + top_row : list of 3 square
    + center_row : list of 3 square
    + bottom_row : list of 3 square

    + rotate(counter_clockwise : boolean) : nothing

class Cube
    + back_face : face
    + left_face : face
    + top_face : face
    + right_face : face
    + front_face : face
    + bottom_face : face

    - rotate_face(cube_face : face, counter_clockwise : boolean) : nothing

Algorithm description

Faces

There are 6 faces on a cube. Each face is represented by a letter, according to where it is located.
These faces make the most sense when you hold the cube with one face parallel to the ground and
one face facing you, but algorithm pages will often display the cube so that you can see the front,
right, and top faces. The six faces are:

 F (Front) - the side facing you.
 U (Up) - the side facing upwards.
 R (Right) - the side facing to the right.
 B (Back) - the side facing away from you.
 L (Left) - the side facing to the left.
 D (Down) - the side facing downwards.

Turns

A turn of one layer of one of the six faces of the cube is written by adding a suffix (F, U, R, B, L, and D)
to the face's name. There are three possible turns that can be applied to a face and all moves should
be applied as if you were looking at the face straight-on. Using the U face as an example, the following
are possible turns:

 U - A 90-degree clockwise turn of the U face.
 U' - A 90-degree counter clockwise turn of the U face.
 U2 - A 180-degree turn (either clockwise or counter clockwise) of the U face.
 
Cube Rotations

Cube rotations involve turning the entire cube. Although it does not count as a “move” it helps change
cube perspective to shorten algorithms. The possible cube rotations, which can also be modified with '
(90 degree counter-clockwise) or 2 (180 degree turn clockwise or anti-clockwise) like a face turn are:

 x or [r] - a rotation of the entire cube as if doing an R turn.
 y or [u] - a rotation of the entire cube as if doing a U turn.
 z or [f] - a rotation of the entire cube as if doing an F turn.
