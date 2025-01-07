import re
import argparse

if __name__ == '__main__':
#================================
# Parse Command Line Args
#================================
	parser = argparse.ArgumentParser()
	parser.add_argument('-f','--filename', help='Enter source filename.')
	args = parser.parse_args()
	
	filein = args.filename 
	fileout = re.sub(r'(.+?).csv',r'\1_json.txt',filein)
	
	fin = open(filein,"r")
	fout = open(fileout,"w")
	
# First line is fields
	line = fin.read()
	
	fields = re.findall(r'[^,]+',line)
	
	print fields
	
	for line in fin:
		outp = '{';
		values = re.findall(r'[^,]+',line)
		for item in values:
			outp = outp + fields[item.index] + ':' + '"' + item + '",'
		outp = outp + '},'
		fout.write(outp)