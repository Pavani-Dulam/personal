import mediapipe as mp
import cv2
import numpy as np
import math
moved=0
FRAME_COUNT = 0
gestureCount = 0
result_data = []
previous_landmarks = None
frameCheck = True
mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands

cap = cv2.VideoCapture(0)
with mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.5,max_num_hands=2) as hands:
    while cap.isOpened():
        ret, frame = cap.read()
        frame = cv2.flip(frame, 1)
        # cv2.putText(frame, f'frame count{FRAME_COUNT}', (100, 150),
        #    cv2.FONT_HERSHEY_TRIPLEX, 1.0, (0, 0, 255), thickness=4)
        FRAME_COUNT += 1
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(image)
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        landmarks = []
        if results.multi_hand_landmarks:
            # print(results.multi_hand_landmarks)
            for hand_landmarks in results.multi_hand_landmarks:
              for landmark in hand_landmarks.landmark:
                  landmarks.append((landmark.x, landmark.y))
            if previous_landmarks is not None:
               moved = any(abs(landmarks[i][0] - previous_landmarks[i][0]) > 0.02 or
                        abs(landmarks[i][1] - previous_landmarks[i][1]) > 0.02
                        for i in range(len(landmarks)))
            #    print(moved)
               if (FRAME_COUNT <= 48 and frameCheck==True):
                 if moved:
                    gestureCount=1
                    cv2.putText(image, f'hand gestures found', (150, 150),
                            cv2.FONT_HERSHEY_TRIPLEX, 1.0, (0, 0, 255), thickness=2)
                    
                    frameCheck=False
               else:
                  json_data = {
                "gestures count": gestureCount
                 }

                  result_data.append(json_data)
                  gestureCount = 0
                  FRAME_COUNT = 0
                  frameCheck = True
            previous_landmarks = landmarks


            # mp_drawing.draw_landmarks(image,hand_landmarks,mp_hands.HAND_CONNECTIONS)
        cv2.imshow("hand tracking", image)

        if cv2.waitKey(10) & 0xFF == ord('q'):
         break             
cap.release()
print(result_data)
cv2.destroyAllWindows()

# print(results)
