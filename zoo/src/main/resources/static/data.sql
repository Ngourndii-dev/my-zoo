
--animal_template
INSERT INTO animal_template (name, species, image_url) VALUES
('Lion', 'Panthera leo', 'https://lh3.googleusercontent.com/d/1K-W4nJsh5NdEDmrpwxgdKEggW6DGYsBp=w1000'),
('Elephant', 'Loxodonta africana', 'https://lh3.googleusercontent.com/d/1TiWdUQYIRy8YqKwzBeNRX7C30uNOnmCC=w1000'),
('Tiger', 'Panthera tigris', 'https://lh3.googleusercontent.com/d/1VzkXlpuyObvj3XH6kU_4I4wqtjBlFcCi=w1000'),
('Bear', 'Ursidae', 'https://lh3.googleusercontent.com/d/1QmwIIbn2rxQUb1U4KZR2Kl6nQkPUTbp6=w1000'),
('Zebra', 'Equus zebra', 'https://lh3.googleusercontent.com/d/1q_4cA5_9fP5fKJHkSkmUqsbINrfGiCo0=w1000'),
('Giraffe','giraffe', 'https://drive.google.com/file/d/1BJuX0k5PFsbpltPMYx23DOsJzRl2A3Wx/view?usp=sharing'),
('Wolf', 'Canis lupus', 'https://lh3.googleusercontent.com/d/1ch1aGOuxWP_6qWDejKxoHVDX_xr1uz-r=w1000'),
('Penguin', 'Spheniscidae', 'https://lh3.googleusercontent.com/d/10qesclb8GNJyfeHojKa8Ogis-pAHvoU3=w1000'),
('Kangaroo', 'Macropodidae', 'https://lh3.googleusercontent.com/d/10t3_GAGU-x-8t6V2CvvbT0Y5a2isxGcJ=w1000'),
('Panda', 'Ailuropoda melanoleuca', 'https://lh3.googleusercontent.com/d/1RsvCleE4sh-U9L2yrqehzgaHyAJ3h77c=w1000'),
('Leopard', 'Panthera pardus', 'https://lh3.googleusercontent.com/d/1Tr-Bu74Q4a7NPDu5871Uv8FS9rsVcWai=w1000'),
('Cheetah', 'Acinonyx jubatus', 'https://lh3.googleusercontent.com/d/14RQP7k0Sc6P0ASDPCvyyCTmYogtf0FVj=w1000'),
('Koala', 'Phascolarctos cinereus', 'https://lh3.googleusercontent.com/d/1HZ9kugCL2T6tUITLmgCtohGWSS6puHN8=w1000'),
('Parrot', 'Psittacidae', 'https://lh3.googleusercontent.com/d/1t1YEiKFHyiU790NEhWhM8oiC9gUtZGzg=w1000'),
('Flamingo', 'Phoenicopterus', 'https://lh3.googleusercontent.com/d/1XF0qx0Uf8EskWTy_5pfGf3gZEZsV226p=w1000'),
('Crocodile', 'Crocodylidae', 'https://lh3.googleusercontent.com/d/1S_V5lm8v1JjPaQNoAtjOH5pSMKOCthmG=w1000'),
('Snake', 'Serpentes', 'https://lh3.googleusercontent.com/d/1GriWUbDc-0GDxUWkUV10CCAL08cz51Ml=w1000'),
('Eagle', 'Aquila chrysaetos', 'https://lh3.googleusercontent.com/d/1thIZs77unXx42k8ORz-p75NA5JocTFTC=w1000'),
('Turtle', 'Testudines', 'https://lh3.googleusercontent.com/d/1O9Qm4a2aeRHhiA3oTbsLLI28gfpDDPZ2=w1000'),
('Fox', 'Vulpes vulpes', 'https://lh3.googleusercontent.com/d/1a7-mVl_1LiIccxEpRCrTW_VtBrCUeel5=w1000');

--animal
INSERT INTO animal (id_animal_template, sex, origin, price, rent, status, color, image_url) VALUES
(1, 'male', 'Africa', 10000, 500, 'available', 'golden', 'https://lh3.googleusercontent.com/d/1Q4OrptobJ-cuwZ9sPQEi8agWh8igr2de=w1000'),
(1, 'female', 'Africa', 9500, 450, 'available', 'golden', 'https://lh3.googleusercontent.com/d/17VWw_rA3wRBNMbw_aYPCJG5Ph3tbEbAC=w1000'),
(2, 'male', 'Africa', 12000, 600, 'unavailable', 'gray', 'https://lh3.googleusercontent.com/d/1yLb4emHex3e_iF_QtQ8p8Edbl4Q2aHeS=w1000'),
(2, 'female', 'Africa', 11000, 550, 'available', 'gray', 'https://lh3.googleusercontent.com/d/1JPekDXND1l1DTImNcG-6Mi-aeJtRWZao=w1000'),
(3, 'male', 'Asia', 8000, 400, 'available', 'orange', 'https://lh3.googleusercontent.com/d/1nlR1gMNiLPRptLi0AYRlXelPRnwtQCpU=w1000'),
(3, 'female', 'Asia', 8500, 420, 'available', 'white', 'https://lh3.googleusercontent.com/d/17FMBdmXbtnW6ZyjAz3hR_9JvYx0hrKEK=w1000'),
(4, 'male', 'North America', 6000, 300, 'unavailable','gray', 'https://drive.google.com/file/d/1zf-G2TbfZlrpXe0aHDO9HYKLsTrsS18H/view?usp=sharing'),
(4, 'female', 'North America', 6500, 320, 'available', 'brown','https://drive.google.com/file/d/13xVMIXiUO15rg09cTTZ_cqeCG5fbo0yI/view?usp=sharing'),
(5, 'male', 'Africa', 7000, 350, 'available', 'striped', 'https://lh3.googleusercontent.com/d/1FqIu_GsQWx0HT3LU9eqcCbfK-haZDNXc=w1000'),
(5, 'female', 'Africa', 7200, 360, 'available', 'striped', 'https://lh3.googleusercontent.com/d/1lryO2m4PWD7gWlsBmkyWNBhoyw4wahGp=w1000'),
(6, 'male', 'Africa', 11000, 500, 'available', 'yellow', 'https://lh3.googleusercontent.com/d/1iky9XXvTYgNmYR1pgnskGzjolGJQvifL=w1000'),
(6, 'female', 'Africa', 11500, 520, 'unavailable', 'yellow', 'https://lh3.googleusercontent.com/d/1PnnB8tjud2yWMC8_lU-8UQjw8D5EtL2q=w1000'),
(7, 'male', 'Europe', 5000, 250, 'available', 'gray', 'https://lh3.googleusercontent.com/d/15XDs2CC2xShGHfa4XAq4hEf2qDzyaM4b=w1000'),
(7, 'female', 'Europe', 5500, 270, 'available', 'white', 'https://lh3.googleusercontent.com/d/1fxQot_bKq1TBVeNqrgQECUqOSc3gCmTj=w1000'),
(8, 'male', 'Antarctica', 3000, 150, 'available', 'black and white', 'https://lh3.googleusercontent.com/d/1ktcPrqWoFb8ClwYQ6OSxCd46P6zclLhl=w1000'),
(8, 'female', 'Antarctica', 3200, 160, 'available', 'black and white', 'https://lh3.googleusercontent.com/d/1GaPYBN0_LYg976M-jTwkA66x5gbw0oJY=w1000'),
(9, 'male', 'Australia', 7000, 350, 'unavailable', 'brown', 'https://lh3.googleusercontent.com/d/1EeG9wUncfuLWZeK98G_l_ZuuUwcZC6GW=w1000'),
(9, 'female', 'Australia', 7500, 375, 'available', 'brown', 'https://lh3.googleusercontent.com/d/1ste7osLTO-DyuDYtzTFAk8rKfvELXmOJ=w1000'),
(10, 'male', 'China', 14000, 700, 'available', 'black and white', 'https://lh3.googleusercontent.com/d/1aWr8HABD4oKye3kVoswnRFwX7fWtg2bG=w1000'),
(10, 'female', 'China', 14500, 720, 'unavailable', 'brown', 'https://lh3.googleusercontent.com/d/108d6qTZ-CqxTSe0Z3PwcVN8-ls0tNjiw=w1000');

-- event
INSERT INTO event (id_animal, image, situation_date, description_event) VALUES
(1, 'https://lh3.googleusercontent.com/d/1tHStFgCfVHU0WqhuSLw53YXZYB2L6En-=w1000', '2025-01-10', 'Lion rescued from poachers'),
(2, 'https://lh3.googleusercontent.com/d/1mX5CBkKq4QYp5odRMhn74nb3awzaKnWM=w1000', '2025-01-15', 'Lion born in the zoo'),
(3, 'https://lh3.googleusercontent.com/d/1mq8GVETx7x_Mk0neBD9P-x75PCuNe_Da=w1000', '2025-01-20', 'Elephant arrived from Africa'),
(4, 'https://lh3.googleusercontent.com/d/1SKwEmK7_Z0njoW42mE2_wyduvrIZoOVK=w1000', '2025-02-05', 'Elephant health checkup'),
(5, 'https://lh3.googleusercontent.com/d/1lNr6ArehvjqHBWiW3q3ZvKqOA0hf2PPn=w1000', '2025-02-10', 'Tiger injury recovery'),
(6, 'https://lh3.googleusercontent.com/d/1HfP-SdhgkZetX_2IBjC487sYs8IGCYiD=w1000', '2025-02-15', 'Tiger moved to larger habitat'),
(7, 'https://lh3.googleusercontent.com/d/11K1dzEYSRvLVbsaJKy-wuSJTdpYjy4UI=w1000', '2025-02-20', 'Bear mating season begins'),
(8, 'https://lh3.googleusercontent.com/d/1fuytI9Q0wGU78YxJPbJmgQlIkTG_SQM6=w1000', '2025-02-25', 'Bear enjoying the snow'),
(9, 'https://lh3.googleusercontent.com/d/1QkvGL272FrYefBDpKCc_xIAUpeB5kMEy=w1000', '2025-03-01', 'Zebra injured by a predator'),
(10, 'https://lh3.googleusercontent.com/d/1mRduO_ijH-sOLxUZ4iIwXuzdoy3madVq=w1000', '2025-03-05', 'Zebra received a medical treatment'),
(11, 'https://lh3.googleusercontent.com/d/1xGVfaDogE8rx4SVt9bTEPHvUxtEVgi0m=w1000', '2025-03-10', 'Giraffe caught on camera feeding'),
(12, 'https://lh3.googleusercontent.com/d/1VLHlqE9fYebDZbIK0Q_LOImvxyjUvqvb=w1000', '2025-03-15', 'Giraffe veterinary checkup'),
(13, 'https://lh3.googleusercontent.com/d/16gOAvD5cQRQ6WxMaJUxstChdrrdJZRMU=w1000', '2025-03-20', 'Wolf spotted in the wild'),
(14, 'https://lh3.googleusercontent.com/d/1c5-HmQcciZ9SB8W4CEKvvJZwNkVTPb6O=w1000', '2025-03-25', 'Wolf new pups born'),
(15, 'https://lh3.googleusercontent.com/d/1nksjQ1O4EHErZ63geyGxs6xnHEu3kO4b=w1000', '2025-03-30', 'Penguin nesting season'),
(16, 'https://lh3.googleusercontent.com/d/1pCyxq3qBR8CSFeQT84RSjGPPHDZKjPJH=w1000', '2025-04-01', 'Penguin migration begins'),
(17, 'https://lh3.googleusercontent.com/d/1HtxfNpcmYolghW2efjODICjfSNVY7hM1=w1000', '2025-04-05', 'Kangaroo rescued from the wild'),
(18, 'https://lh3.googleusercontent.com/d/1S7uIgUoqmnhWz2_WZnBZFpZvGa_mrcr9=w1000', '2025-04-10', 'Kangaroo health inspection'),
(19, 'https://lh3.googleusercontent.com/d/1bJIcXG8pINsW3bTMYHbNIFInem2yCpXH=w1000', '2025-04-15', 'Panda born in the zoo'),
(20, 'https://lh3.googleusercontent.com/d/10MR_eCRvWpbSfUORsVjtVb3GR5R-pokA=w1000', '2025-04-20', 'Panda feeding time');
