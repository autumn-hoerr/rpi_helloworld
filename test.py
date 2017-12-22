import RPi.GPIO as IO
import time

IO.setmode(IO.BCM)
IO.setup(21, IO.OUT)

IO.output(21, 1)
time.sleep(1)
IO.cleanup()
time.sleep(1)


