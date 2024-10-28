��
 
 #   N o d e   M o n g o   E x p r e s s   B o i l e r p l a t e 
 
 A   N o d e . j s ,   M o n g o D B ,   a n d   E x p r e s s   b o i l e r p l a t e   p r o j e c t   u s i n g   T y p e S c r i p t .   T h i s   b o i l e r p l a t e   s e t s   u p   a   b a s i c   a p p l i c a t i o n   s t r u c t u r e   w i t h   e s s e n t i a l   p a c k a g e s   a n d   c o n f i g u r a t i o n s   t o   h e l p   y o u   g e t   s t a r t e d   q u i c k l y . 
 
 
 
 
 
 # #   F e a t u r e s 
 
 -   * * C o r e   D e p e n d e n c i e s * * : 
 
     -   ` e x p r e s s `   ( v 4 . 2 1 . 1 ) :   A   m i n i m a l   a n d   f l e x i b l e   N o d e . j s   w e b   a p p l i c a t i o n   f r a m e w o r k . 
 
     -   ` m o n g o o s e `   ( v 8 . 7 . 3 ) :   A   M o n g o D B   o b j e c t   m o d e l i n g   t o o l   f o r   N o d e . j s . 
 
     -   ` d o t e n v `   ( v 1 6 . 4 . 5 ) :   L o a d s   e n v i r o n m e n t   v a r i a b l e s   f r o m   a   ` . e n v `   f i l e   i n t o   ` p r o c e s s . e n v ` . 
 
     -   ` c o o k i e - p a r s e r `   ( v 1 . 4 . 7 ) :   P a r s e   C o o k i e   h e a d e r   a n d   p o p u l a t e   ` r e q . c o o k i e s ` . 
 
     -   ` c o r s `   ( v 2 . 8 . 5 ) :   M i d d l e w a r e   f o r   e n a b l i n g   C r o s s - O r i g i n   R e s o u r c e   S h a r i n g . 
 
 
 
 -   * * D e v e l o p m e n t   D e p e n d e n c i e s * * : 
 
     -   ` t y p e s c r i p t `   ( v 5 . 6 . 3 ) :   A   s u p e r s e t   o f   J a v a S c r i p t   t h a t   c o m p i l e s   t o   c l e a n   J a v a S c r i p t   o u t p u t . 
 
     -   ` e s l i n t `   ( v 9 . 1 3 . 0 ) :   A   t o o l   f o r   i d e n t i f y i n g   a n d   r e p o r t i n g   o n   p a t t e r n s   i n   J a v a S c r i p t . 
 
     -   ` @ t y p e s c r i p t - e s l i n t / e s l i n t - p l u g i n `   ( v 8 . 1 1 . 0 )   &   ` @ t y p e s c r i p t - e s l i n t / p a r s e r `   ( v 8 . 1 1 . 0 ) :   E S L i n t   r u l e s   a n d   p a r s e r   f o r   T y p e S c r i p t . 
 
     -   ` h u s k y `   ( v 9 . 1 . 6 ) :   G i t   h o o k s   m a d e   e a s y . 
 
     -   ` p r e t t i e r `   ( v 3 . 3 . 3 ) :   A n   o p i n i o n a t e d   c o d e   f o r m a t t e r . 
 
     -   ` t s - n o d e - d e v `   ( v 2 . 0 . 0 ) :   A   d e v e l o p m e n t   t o o l   t h a t   h e l p s   r u n   T y p e S c r i p t   a p p l i c a t i o n s . 
 
     -   ` e s l i n t - c o n f i g - p r e t t i e r `   ( v 9 . 1 . 0 ) :   T u r n s   o f f   a l l   r u l e s   t h a t   a r e   u n n e c e s s a r y   o r   m i g h t   c o n f l i c t   w i t h   P r e t t i e r . 
 
 
 
 
 
 # # #   I n s t a l l a t i o n 
 
 
 
 1 .   C l o n e   t h e   r e p o s i t o r y : 
 
       ` ` ` b a s h 
 
       g i t   c l o n e   h t t p s : / / g i t h u b . c o m / i t z J u n a e d R a y h a n / b a c k e n d - n o d e - e x p r e s s - m o n g o o s e - t y p e s c r i p t - b o i l e r p l a t e . g i t 
 
       c d   b a c k e n d - n o d e - e x p r e s s - m o n g o o s e - t y p e s c r i p t - b o i l e r p l a t e 
 
       ` ` ` 
 
 
 
 2 .   I n s t a l l   d e p e n d e n c i e s   u s i n g   Y a r n : 
 
       ` ` ` b a s h 
 
       y a r n   i n s t a l l 
 
       ` ` ` 
 
 
 
 3 .   C r e a t e   a   ` . e n v `   f i l e   i n   t h e   r o o t   d i r e c t o r y   a n d   a d d   y o u r   e n v i r o n m e n t   v a r i a b l e s .   H e r e  s   a n   e x a m p l e : 
 
       ` ` ` e n v 
 
       P O R T = 5 0 0 0 
 
       M O N G O D B _ U R I = m o n g o d b : / / l o c a l h o s t : 2 7 0 1 7 / m y d a t a b a s e 
 
       ` ` ` 
 
 
 
 # #   U s a g e 
 
 
 
 T o   s t a r t   t h e   a p p l i c a t i o n ,   u s e   t h e   f o l l o w i n g   c o m m a n d : 
 
 
 
 ` ` ` b a s h 
 
 y a r n   s t a r t 
 
 ` ` ` 
 
 
 
 T h i s   c o m m a n d   w i l l   r u n   t h e   s e r v e r   u s i n g   ` t s - n o d e - d e v ` ,   w h i c h   w a t c h e s   f o r   f i l e   c h a n g e s   a n d   a u t o m a t i c a l l y   r e s t a r t s   t h e   s e r v e r . 
 
 
 
 # # #   S c r i p t s 
 
 
 
 H e r e   a r e   s o m e   h e l p f u l   s c r i p t s   y o u   c a n   r u n : 
 
 
 
 -   * * S t a r t   t h e   s e r v e r * * :   
 
     ` ` ` b a s h 
 
     y a r n   s t a r t 
 
     ` ` ` 
 
 -   * * C h e c k   f o r   l i n t i n g   e r r o r s * * :   
 
     ` ` ` b a s h 
 
     y a r n   l i n t : c h e c k 
 
     ` ` ` 
 
 -   * * F i x   l i n t i n g   e r r o r s * * :   
 
     ` ` ` b a s h 
 
     y a r n   l i n t : f i x 
 
     ` ` ` 
 
 -   * * C h e c k   f o r m a t t i n g   w i t h   P r e t t i e r * * :   
 
     ` ` ` b a s h 
 
     y a r n   p r e t t i e r : c h e c k 
 
     ` ` ` 
 
 -   * * F i x   f o r m a t t i n g   i s s u e s * * :   
 
     ` ` ` b a s h 
 
     y a r n   p r e t t i e r : f i x 
 
     ` ` ` 
 
 
 
 # # #   L i n t i n g   a n d   F o r m a t t i n g 
 
 
 
 T o   e n s u r e   y o u r   c o d e   i s   w e l l - s t r u c t u r e d ,   y o u   c a n   u s e   ` l i n t - s t a g e d `   i n   c o m b i n a t i o n   w i t h   ` h u s k y ` .   T h i s   w i l l   r u n   y o u r   l i n t i n g   a n d   f o r m a t t i n g   c h e c k s   o n   s t a g e d   f i l e s   b e f o r e   c o m m i t t i n g . 
 
 
 
 # #   L i c e n s e 
 
 T h i s   p r o j e c t   i s   l i c e n s e d   u n d e r   t h e   [ I S C   L i c e n s e ] ( L I C E N S E ) . 
 
 
