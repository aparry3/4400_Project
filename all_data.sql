INSERT INTO LOCATION (City, State) VALUES ('New York', 'New York');
INSERT INTO LOCATION (City, State) VALUES ('Atlanta', 'Georgia');
INSERT INTO LOCATION (City, State) VALUES ('Las Angeles', 'California');
INSERT INTO LOCATION (City, State) VALUES ('Chicago', 'Illinois');
INSERT INTO LOCATION (City, State) VALUES ('Houston', 'Texas');
INSERT INTO LOCATION (City, State) VALUES ('Philadelphia', 'Pennsylvania');
INSERT INTO LOCATION (City, State) VALUES ('Phoenix', 'Arizona');
INSERT INTO LOCATION (City, State) VALUES ('San Antonio', 'Texas');
INSERT INTO LOCATION (City, State) VALUES ('San Diego', 'California');
INSERT INTO LOCATION (City, State) VALUES ('Dallas', 'Texas');
INSERT INTO LOCATION (City, State) VALUES ('San Jose', 'California');
INSERT INTO LOCATION (City, State) VALUES ('Austin', 'Texas');
INSERT INTO LOCATION (City, State) VALUES ('Jacksonville', 'Florida');
INSERT INTO LOCATION (City, State) VALUES ('San Francisco', 'California');
INSERT INTO LOCATION (City, State) VALUES ('Indianapolis', 'Indiana');
INSERT INTO LOCATION (City, State) VALUES ('Columbus', 'Ohio');
INSERT INTO LOCATION (City, State) VALUES ('Fort Worth', 'Texas');
INSERT INTO LOCATION (City, State) VALUES ('Charlotte', 'North Carolina');
INSERT INTO LOCATION (City, State) VALUES ('Seattle', 'Washington');
INSERT INTO LOCATION (City, State) VALUES ('Boston', 'Massachusetts');
INSERT INTO LOCATION (City, State) VALUES ('Memphis', 'Tennessee');




INSERT INTO USER (Username, Email, Password, Usertype) VALUES('admin', 'admin@admin', 'admin', 'Admin');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('aaron', 'aaron@parry', 123, 'Admin');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('ryan', 'ryan@sanders', 123, 'Admin');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('hannah', 'hannah@gallagher', 123, 'Admin');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('chris', 'chris@cappa', 123, 'Admin');




INSERT INTO USER (Username, Email, Password, Usertype) VALUES('acityofficial', 'a@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('bcityofficial', 'b@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('ccityofficial', 'c@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('dcityofficial', 'd@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('ecityofficial', 'e@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('fcityofficial', 'f@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('gcityofficial', 'g@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('hcityofficial', 'h@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('icityofficial', 'i@cityofficial', 123, 'City Official');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('jcityofficial', 'j@cityofficial', 123, 'City Official');


INSERT INTO USER (Username, Email, Password, Usertype) VALUES('auser', 'a@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('buser', 'b@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('cuser', 'c@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('duser', 'd@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('euser', 'e@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('fuser', 'f@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('guser', 'g@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('huser', 'h@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('iuser', 'i@user', 123, 'City Scientist');
INSERT INTO USER (Username, Email, Password, Usertype) VALUES('juser', 'j@user', 123, 'City Scientist');


INSERT INTO CITYOFFICIAL (Username, Title, City, State, Pending) VALUES ('acityofficial', 'Mayor', 'Atlanta', 'Georgia', 0);
INSERT INTO CITYOFFICIAL (Username, Title, City, State, Pending) VALUES ('bcityofficial', 'Mayor', 'Austin', 'Texas', 0);
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('ccityofficial', 'Mayor', 'Boston', 'Massachusetts');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('dcityofficial', 'Mayor', 'San Francisco', 'California');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('ecityofficial', 'Mayor', 'Memphis', 'Tennessee');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('fcityofficial', 'Mayor', 'San Diego', 'California');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('gcityofficial', 'Mayor', 'Phoenix', 'Arizona');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('hcityofficial', 'Mayor', 'Jacksonville', 'Florida');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('icityofficial', 'Mayor', 'Charlotte', 'North Carolina');
INSERT INTO CITYOFFICIAL (Username, Title, City, State) VALUES ('jcityofficial', 'Mayor', 'Seattle', 'Washington');




INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged) VALUES('Georgia Tech', 30332, 'Atlanta', 'Georgia',  true, '2017-02-23 12:00:00');
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged) VALUES('GSU', 30303, 'Atlanta', 'Georgia',  false, null);
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged) VALUES('Emory', 30322, 'Atlanta', 'Georgia',  false, null);
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged) VALUES('UChicago', 60637, 'Chicago', 'Illinois',  true, '2017-02-24 12:00:00');


INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged)
VALUES('GGNRA', 94123, 'San Francisco', 'California', true, '2017-02-25 12:00:00');
INSERT INTO POI (Name, Zipcode,  City, State, Flagged, Date_Time_Flagged)
VALUES('UTexas', 78712, 'Austin', 'Texas', false, null);
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged)
VALUES('SpaceNeedle', 98109, 'Seattle', 'Washington', true, '2017-02-26 12:00:00');
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged)
VALUES('PZoo', 19104, 'Philadelphia', 'Pennsylvania', false, null);
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged)
VALUES('MSG', 10001, 'New York', 'New York', true, '2017-02-25 12:00:00');
INSERT INTO POI (Name, Zipcode, City, State, Flagged, Date_Time_Flagged)
VALUES('NEAquarium', 02110, 'Boston', 'Massachusetts', true, '2017-02-26');




INSERT INTO DATATYPE (Name) VALUES ('Mold');
INSERT INTO DATATYPE (Name) VALUES ('Air Quality');


INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-01-31', '15:32:00', 12, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-15', '16:12:00', 42, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-24', '04:29:00', 4, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-01', '03:57:00', 34, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-02', '12:01:00', 18, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-01-17', '18:19:00', 35, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-01-08', '08:59:00', 11, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-28', '10:10:00', 33, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-03-15', '20:45:00', 9, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-03-03', '09:21:00', 16, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-19', '17:38:00', 7, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-01-29', '08:19:00', 22, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-01-02', '11:11:00', 17, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-05', '19:02:00', 14, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('Georgia Tech', '2017-02-05', '07:59:00', 12, 'Air Quality');


INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-01-31', '10:40:00', 3, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-02-26', '14:15:00', 19, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-03-01', '09:25:00', 41, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-02-17', '19:51:00', 28, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-02-14', '22:00:00', 10, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-01-08', '08:38:00', 37, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('UChicago', '2017-01-09', '12:06:00', 9, 'Mold');


INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-01-13', '10:12:00', 22, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-01-13', '20:44:00', 12, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-01-21', '18:03:00', 30, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-01-27', '14:27:00', 28, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-02-02', '09:30:00', 45, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-02-04', '11:54:00', 12, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-02-11', '05:12:00', 36, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('GGNRA', '2017-02-16', '23:23:00', 4, 'Mold');


INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('SpaceNeedle', '2017-02-26', '09:58:00', 28, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('SpaceNeedle', '2017-02-28', '08:22:00', 19, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('SpaceNeedle', '2017-03-01', '12:21:00', 25, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('SpaceNeedle', '2017-03-02', '17:42:00', 15, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('SpaceNeedle', '2017-03-03', '23:32:00', 20, 'Air Quality');


INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('MSG', '2017-02-27', '11:00:00', 38, 'Air Quality');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('MSG', '2017-03-01', '19:19:00', 13, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('MSG', '2017-03-03', '05:54:00', 39, 'Air Quality');


INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('NEAquarium', '2017-02-28', '12:09:00', 14, 'Mold');
INSERT INTO DATAPOINT (POI, DpDate, DpTime, Value, Datatype) VALUES ('NEAquarium', '2017-03-09', '14:17:00', 9, 'Mold');
