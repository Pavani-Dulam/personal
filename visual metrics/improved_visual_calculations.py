import mediapipe as mp
import numpy as np
import cv2 as cv


class Shoulder:
    def __init__(self, tilted, swivel):
        self.tilted = tilted
        self.swivel = swivel


class Hip:
    def __init__(self, tilted, swivel):
        self.tilted = tilted
        self.swivel = swivel
       


def ShoulderFeedback(left_shoulder_landmark_object, right_shoulder_landmark_object, initial_right_shoulder_landmark_object, initial_left_shoulder_landmark_object, frame):
    # Return values instantiated, default false
    tilted = False
    swivel = False
    initial_normalized_shoulder_distance = abs(
        initial_right_shoulder_landmark_object.x - initial_left_shoulder_landmark_object.x)

    # Calculating Normalized Y-coordinate distance between left and right shoulder landmarks
    Y_distance_between_shoulders = abs(
        right_shoulder_landmark_object.y - left_shoulder_landmark_object.y)

    # Calculating Normalized X-coordinate distance between left and right shoulder landmarks
    X_distance_between_shoulders = abs(
        right_shoulder_landmark_object.x - left_shoulder_landmark_object.x)

    # Determining if Shoulders are tilted. Can change minimum distance detection
    if Y_distance_between_shoulders > .04:
        tilted = True

    # Determining if Shoulders swivel. Can change minimum distance detection for both distance between and distance away from starting position
    if (X_distance_between_shoulders < initial_normalized_shoulder_distance*.975) and (abs(right_shoulder_landmark_object.x-initial_right_shoulder_landmark_object.x) > 0.02) and (abs(left_shoulder_landmark_object.x-initial_left_shoulder_landmark_object.x) > 0.02):
        swivel = True
    shoulder = Shoulder(tilted, swivel)
    # Returns a tuple of tilted and swivel results
    return shoulder


def HipFeedback(left_hip_landmark_object, right_hip_landmark_object, initial_right_hip_landmark_object, initial_left_hip_landmark_object):
    # Return values instantiated, default false
    tilted = False
    swivel = False
    initial_normalized_hip_distance = abs(
        initial_right_hip_landmark_object.x - initial_left_hip_landmark_object.x)

    # Calculating Normalized Y-coordinate distance between left and right hip landmarks
    Y_distance_between_hips = abs(
        right_hip_landmark_object.y - left_hip_landmark_object.y)

    # Calculating Normalized X-coordinate distance between left and right hip landmarks
    X_distance_between_hips = abs(
        right_hip_landmark_object.x - left_hip_landmark_object.x)

    # Determining if hips are tilted. Can change minimum distance detection
    if Y_distance_between_hips > .04:
        tilted = True

    # Determining if hips swivel. Can change minimum distance detection for both distance between and distance away from starting position
    if (X_distance_between_hips < initial_normalized_hip_distance*.975) and (abs(right_hip_landmark_object.x-initial_right_hip_landmark_object.x) > 0.02) and (abs(left_hip_landmark_object.x-initial_left_hip_landmark_object.x) > 0.02):
        swivel = True
    hip = Hip(tilted, swivel)
    # Returns a tuple of tilted and swivel results
    return hip

cam = cv.VideoCapture(0)
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
initial_right_shoulder = 0
initial_left_shoulder = 0
initial_right_hip = 0
initial_left_hip = 0
fiftyData = []
positions_data = []
framecount = 0
shoulder_tilted = False
shoulder_swivel = False
hip_tilted = False
hip_swivel = False
with mp_pose.Pose(static_image_mode=True, model_complexity=2, enable_segmentation=True, min_detection_confidence=0.5) as pose:
        while True:
            key = cv.waitKey(10)
            if key == 27:  # ESC
                break

            ret, frame = cam.read()
            framecount += 1
            if not ret:
                break

            image = cv.cvtColor(frame, cv.COLOR_BGR2RGB)
            results = pose.process(image)
            mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
                                      landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style())

            #  SHOULDERS  #
            if (framecount <= 50):
                if initial_left_shoulder == 0:
                    if results.pose_landmarks is not None:
                        initial_right_shoulder = results.pose_landmarks.landmark[12]
                        initial_left_shoulder = results.pose_landmarks.landmark[11]
                elif results.pose_landmarks is not None:
                    shoulder_results = ShoulderFeedback(
                        results.pose_landmarks.landmark[11], results.pose_landmarks.landmark[12], initial_right_shoulder, initial_left_shoulder, frame)
                    if shoulder_results.tilted:
                        shoulder_tilted = shoulder_results.tilted
                        frame = cv.flip(frame, 1)
                        cv.putText(frame, "Stop tilting your shoulders too far", (10, 30),
                                   cv.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255), 4, cv.LINE_AA)
                        frame = cv.flip(frame, 1)
                    if shoulder_results.swivel:
                        shoulder_swivel = shoulder_results.swivel
                        frame = cv.flip(frame, 1)
                        cv.putText(frame, "Stop the swivel of your chair", (10, 690),
                                   cv.FONT_HERSHEY_SIMPLEX, 1.0, (255, 0, 0), 4, cv.LINE_AA)
                        frame = cv.flip(frame, 1)

            #  HIPS  #
                if results.pose_landmarks is not None:
                    if results.pose_landmarks.landmark[24].visibility > .75 and results.pose_landmarks.landmark[23].visibility > .75:
                        if initial_left_hip == 0:
                            initial_right_hip = results.pose_landmarks.landmark[24]
                            initial_left_hip = results.pose_landmarks.landmark[23]
                        else:
                            hip_results = HipFeedback(
                                results.pose_landmarks.landmark[23], results.pose_landmarks.landmark[24], initial_right_hip, initial_left_hip)
                            if hip_results.tilted:
                                hip_tilted = hip_results.tilted
                                frame = cv.flip(frame, 1)
                                cv.putText(frame, "Stop tilting your hips too far", (10, 70),
                                           cv.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), 4, cv.LINE_AA)
                                frame = cv.flip(frame, 1)
                            if hip_results.swivel:
                                hip_swivel = hip_results.swivel
                                frame = cv.flip(frame, 1)
                                cv.putText(frame, "Stop the swivel of your chair", (10, 690),
                                           cv.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), 4, cv.LINE_AA)
                                frame = cv.flip(frame, 1)
                json_data = {
                    'shoulder tilted': shoulder_tilted,
                    'shoulder swivel': shoulder_swivel,
                    'hip tilted': hip_tilted,
                    'hip swivel': hip_swivel
                }
            #    print(json_data)
                fiftyData.append(json_data)
            else:
                main_json={
                    'shoulder tilted':False,
                    'shoulder swivel': False,
                    'hip tilted': False,
                    'hip swivel': False
                }
                print(fiftyData)

                stt = 0
                stf = 0
                swt = 0
                swf = 0
                htt = 0
                htf = 0
                hwt = 0
                hwf = 0
                for i in fiftyData:
                    if i['shoulder tilted'] == True:
                        stt = stt+1
                    if i['shoulder tilted'] == False:
                        stf = stf+1
                    if i['shoulder swivel'] == True:
                        swt = swt+1
                    if i['shoulder swivel'] == False:
                        swf = swf+1
                    if i['hip tilted'] == True:
                        htt = htt+1
                    if i['hip tilted'] == False:
                        htf = htf+1
                    if i['hip swivel'] == True:
                        hwt = hwt+1
                    if i['hip swivel'] == False:
                        hwf = hwf+1
                # print(stt, stf, swt, swf)
                if (stt > stf):
                    main_json['shoulder tilted'] = True
                else:
                    main_json['shoulder tilted'] = False
                if (swt > swf):
                    main_json['shoulder swivel'] = True
                else:
                    main_json['shoulder swivel'] = False
                if (htt > htf):
                    main_json['hip tilted'] = True
                else:
                    main_json['hip tilted'] = False
                if (hwt > hwf):
                    main_json['hip swivel'] = True
                else:
                    main_json['hip swivel'] = False
                positions_data.append(main_json)

                framecount = 0
                fiftyData = []
                

            cv.imshow("camera", cv.flip(frame, 1))

            # print(results.pose_landmarks.landmark[11])

cam.release()
print("json for every fifty frames")
print(positions_data)
