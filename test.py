import RPi.GPIO as IO
import time

IO.setmode(IO.BCM)
IO.setup(27, IO.OUT)

IO.output(27, 1)
time.sleep(1)
IO.cleanup()
time.sleep(1)


