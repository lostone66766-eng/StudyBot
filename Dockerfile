FROM tomcat:9.0
COPY target/StudyBot.war /usr/local/tomcat/webapps/ROOT.war
CMD ["catalina.sh", "run"]